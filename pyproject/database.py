# database.py
import sqlite3
from typing import List
from datetime import datetime
import pandas as pd
from models import NewsItem
from uuid import UUID
import hashlib

DB_NAME = "crypto_data.db"


def init_db():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS prices (
        id TEXT PRIMARY KEY,
        name TEXT,
        price REAL,
        timestamp TEXT
    )''')
    # Create users table
    c.execute('''CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL
    )''')
    conn.commit()
    conn.close()


def insert_price(id: str, name: str, price: float, timestamp: datetime):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute('''INSERT INTO prices (id, name, price, timestamp) VALUES (?, ?, ?, ?)''',
              (id, name, price, timestamp.isoformat()))
    conn.commit()
    conn.close()


def get_prices() -> List[dict]:
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute('SELECT name, price, timestamp FROM prices ORDER BY timestamp DESC')
    rows = c.fetchall()
    conn.close()
    return [{"name": row[0], "price": row[1], "timestamp": row[2]} for row in rows]


def save_news(news_items: List[NewsItem], filename: str):
    df = pd.DataFrame([item.dict() for item in news_items])
    df.to_csv(filename, index=False)


def load_news(filename: str) -> List[NewsItem]:
    df = pd.read_csv(filename)
    news_items = []
    for _, row in df.iterrows():
        news_items.append(NewsItem(
            id=UUID(str(row['id'])),
            title=str(row['title']),
            url=str(row['url']),
            timestamp=datetime.fromisoformat(str(row['timestamp']))
        ))
    return news_items

def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode()).hexdigest()

def create_user(username: str, password: str) -> bool:
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    try:
        c.execute('INSERT INTO users (username, password_hash) VALUES (?, ?)', (username, hash_password(password)))
        conn.commit()
        return True
    except sqlite3.IntegrityError:
        return False
    finally:
        conn.close()

def verify_user(username: str, password: str) -> bool:
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute('SELECT password_hash FROM users WHERE username = ?', (username,))
    row = c.fetchone()
    conn.close()
    if row and row[0] == hash_password(password):
        return True
    return False