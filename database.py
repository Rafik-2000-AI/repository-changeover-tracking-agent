import sqlalchemy as sa
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, scoped_session

# Database URL
DATABASE_URL = 'sqlite:///changeover_tracking.db'

# Create a new base class for declarative models
Base = declarative_base()

# Session management
def get_session():
    engine = sa.create_engine(DATABASE_URL)
    Session = scoped_session(sessionmaker(bind=engine))
    return Session

# Initialize database

def initialize_database():
    engine = sa.create_engine(DATABASE_URL)
    Base.metadata.create_all(engine)  # Create tables based on defined models

# You can define your models here
class Changeover(Base):
    __tablename__ = 'changeovers'
    id = sa.Column(sa.Integer, primary_key=True)
    description = sa.Column(sa.String, nullable=False)
    timestamp = sa.Column(sa.DateTime, default=sa.func.now())

class HistoricalReport(Base):
    __tablename__ = 'historical_reports'
    id = sa.Column(sa.Integer, primary_key=True)
    report_data = sa.Column(sa.String, nullable=False)
    generated_at = sa.Column(sa.DateTime, default=sa.func.now())

# Initialize the database and create tables if they don't exist
if __name__ == '__main__':
    initialize_database()