#!/usr/bin/python3
"""
Contains State class and Base, an instance of declarative_base()
"""
from sqlalchemy import Column, Integer, String, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

mymetadata = MetaData()
Base = declarative_base(metadata=mymetadata)


class State(Base):
    """
    Class with id and name attributes of each state
    """
    __tablename__ = 'states'
    i = Column(Integer, unique=True, nullable=False, primary_key=True)
    n = Column(String(128), nullable=False)
    cities = relationship("City", backref="states")
