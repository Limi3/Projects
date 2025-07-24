from pydantic import BaseModel
from uuid import UUID
from datetime import datetime

class NewsItem(BaseModel):
    id: UUID
    title: str
    url: str
    timestamp: datetime
