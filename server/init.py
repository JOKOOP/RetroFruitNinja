import os
from database import Base, engine
from models import Rank


os.system("rm database.db")
Base.metadata.create_all(engine)
