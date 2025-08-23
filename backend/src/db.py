from sqlmodel import Field, SQLModel, create_engine
from constants import PORTGRES_URL


class Hero(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str
    secret_name: str
    age: int | None = None


engine = create_engine(PORTGRES_URL, echo=True)

SQLModel.metadata.create_all(engine)
