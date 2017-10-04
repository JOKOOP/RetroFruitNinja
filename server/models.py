from sqlalchemy import Column,Integer, String, Boolean
from database import Base

class Rank(Base):
    __tablename__ = "rank"
    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)
    points = Column(Integer, nullable=False)

    def __init__(self, name, points):
        self.name = name
        self.points = points

    def serialize(self):
        return {"name" : self.name, "points" : self.points}
