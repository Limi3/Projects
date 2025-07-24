# main.py
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import HTMLResponse, FileResponse, JSONResponse
from typing import List
from models import NewsItem
from scraper import scrape_and_store_prices, scrape_news
from database import init_db, get_prices, save_news, load_news
from database import create_user, verify_user
from plotter import get_price_plot_html, plot_headline_word_counts
import os
from bs4 import BeautifulSoup
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed
from urllib.parse import urljoin, urlparse

app = FastAPI()
NEWS_CSV = os.getenv("NEWS_CSV", "news.csv")

@app.on_event("startup")
def startup():
    init_db()
    scrape_and_store_prices()

@app.get("/prices")
def read_prices():
    return get_prices()

@app.get("/dashboard")
def dashboard():
    return get_price_plot_html()

@app.post("/scrape", response_model=List[NewsItem])
def scrape_and_save_news():
    news_items = scrape_news()
    if not news_items:
        raise HTTPException(status_code=404, detail="No news found.")
    save_news(news_items, NEWS_CSV)
    return news_items

@app.get("/news", response_model=List[NewsItem])
def get_news():
    if not os.path.exists(NEWS_CSV):
        return []
    return load_news(NEWS_CSV)

@app.get("/plot", response_class=HTMLResponse)
def get_plot():
    if not os.path.exists(NEWS_CSV):
        raise HTTPException(status_code=404, detail="No news data available.")
    news_items = load_news(NEWS_CSV)
    html = plot_headline_word_counts(news_items)
    return HTMLResponse(content=html)

@app.get("/", response_class=HTMLResponse)
def serve_index():
    return FileResponse("index.html")

@app.post("/scrape_custom")
async def scrape_custom(request: Request):
    data = await request.json()
    url = data.get("url")
    headers = {"User-Agent": "Mozilla/5.0"}
    visited = set()
    results = []
    max_depth = 2
    max_pages = 15
    timeout = 3

    def fetch_page(current_url):
        try:
            resp = requests.get(current_url, headers=headers, timeout=timeout)
            status = resp.status_code
            soup = BeautifulSoup(resp.text, "html.parser")
            preview = soup.get_text(separator=' ', strip=True)[:200]
            # Find all links on the page
            links = set()
            for a in soup.find_all('a', href=True):
                href = a['href']
                joined = urljoin(current_url, href)
                if urlparse(joined).netloc == urlparse(url).netloc:
                    links.add(joined)
            return {
                "url": current_url,
                "status": status,
                "preview": preview,
                "links": links
            }
        except Exception as e:
            return {
                "url": current_url,
                "status": "error",
                "preview": str(e)[:200],
                "links": set()
            }

    try:
        to_visit = [(url, 0)]
        with ThreadPoolExecutor(max_workers=5) as executor:
            while to_visit and len(results) < max_pages:
                batch = []
                next_to_visit = []
                for current_url, depth in to_visit:
                    if current_url in visited or depth > max_depth or len(results) >= max_pages:
                        continue
                    visited.add(current_url)
                    batch.append((current_url, depth))
                # Submit all in this batch
                future_to_url = {executor.submit(fetch_page, u): (u, d) for u, d in batch}
                for future in as_completed(future_to_url):
                    res = future.result()
                    results.append({"url": res["url"], "status": res["status"], "preview": res["preview"]})
                    if len(results) >= max_pages:
                        break
                    # Add new links for next depth
                    if future_to_url[future][1] < max_depth:
                        for link in res["links"]:
                            if link not in visited:
                                next_to_visit.append((link, future_to_url[future][1] + 1))
                to_visit = next_to_visit
        if not results:
            return JSONResponse(status_code=404, content={"detail": "No endpoints found."})
        return {"endpoints": results}
    except Exception as e:
        return JSONResponse(status_code=500, content={"detail": str(e)})

@app.post("/signup")
async def signup(request: Request):
    data = await request.json()
    username = data.get("username")
    password = data.get("password")
    if not username or not password:
        return JSONResponse(status_code=400, content={"detail": "Username and password required."})
    if create_user(username, password):
        return {"message": "Signup successful."}
    else:
        return JSONResponse(status_code=400, content={"detail": "Username already exists."})

@app.post("/login")
async def login(request: Request):
    data = await request.json()
    username = data.get("username")
    password = data.get("password")
    if not username or not password:
        return JSONResponse(status_code=400, content={"detail": "Username and password required."})
    if verify_user(username, password):
        return {"message": "Login successful."}
    else:
        return JSONResponse(status_code=401, content={"detail": "Invalid username or password."})