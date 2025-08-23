from sqlmodel import Field, SQLModel, create_engine
from constants import POSTGRES_URL


class Hero(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str
    secret_name: str
    age: int | None = None


engine = create_engine(POSTGRES_URL, echo=True)

SQLModel.metadata.create_all(engine)
