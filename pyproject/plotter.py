# plotter.py
import pandas as pd
import plotly.express as px
from database import get_prices
from fastapi.responses import HTMLResponse
from typing import List
from models import NewsItem
import plotly.graph_objs as go


def get_price_plot_html():
    data = get_prices()
    df = pd.DataFrame(data)
    if df.empty:
        return HTMLResponse("<h1>No data available</h1>", status_code=200)

    df['timestamp'] = pd.to_datetime(df['timestamp'])
    fig = px.line(df, x='timestamp', y='price', title='Bitcoin Price Over Time')
    return HTMLResponse(fig.to_html(include_plotlyjs='cdn'), status_code=200)


def plot_headline_word_counts(news_items: List[NewsItem]) -> str:
    headlines = [item.title for item in news_items]
    word_counts = [len(title.split()) for title in headlines]
    fig = go.Figure([go.Bar(x=headlines, y=word_counts)])
    fig.update_layout(title="Headline Word Counts", xaxis_title="Headline", yaxis_title="Word Count")
    return fig.to_html(full_html=False)