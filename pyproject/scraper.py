# scraper.py
import requests
from bs4 import BeautifulSoup
from uuid import uuid4
from datetime import datetime
from database import insert_price
from models import NewsItem
from typing import List
import os
from dotenv import load_dotenv

load_dotenv()

URL = "https://coinmarketcap.com/currencies/bitcoin/"
NEWS_URL = os.getenv("NEWS_URL", "https://www.bbc.com/news")

def scrape_and_store_prices():
    response = requests.get(URL)
    print(response.text)
    soup = BeautifulSoup(response.text, 'html.parser')
    price_tag = soup.find("div", class_="priceValue")

    if price_tag:
        price_text = price_tag.text.replace('$', '').replace(',', '')
        price = float(price_text)
        insert_price(uuid4().hex, "Bitcoin", price, datetime.utcnow())

def scrape_news() -> List[NewsItem]:
    headers = {"User-Agent": "Mozilla/5.0"}
    response = requests.get(NEWS_URL, headers=headers)
    response.raise_for_status()
    print(response.text)
    soup = BeautifulSoup(response.text, "html.parser")
    news_items = []
    # Reuters headlines are in <a> tags with data-testid="Heading"
    for tag in soup.find_all("a", attrs={"data-testid": "Heading"}):
        # Only process if tag has 'get' attribute (i.e., is a Tag, not NavigableString)
        if not hasattr(tag, 'get'):
            continue
        title = tag.get_text(strip=True)
        href = getattr(tag, 'get', lambda x: None)("href")
        # Ensure href is a string
        if isinstance(href, list):
            url = href[0] if href else None
        else:
            url = href
        if url and isinstance(url, str) and not url.startswith("http"):
            url = f"https://www.reuters.com{url}"
        if url and isinstance(url, str):
            news_item = NewsItem(
                id=uuid4(),
                title=title,
                url=url,
                timestamp=datetime.now()
            )
            news_items.append(news_item)
    print(response.status_code)
    print(response.text)
    return news_items