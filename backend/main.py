from typing import Union

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from constants import BACKEND_URL, FRONTEND_URL, BACKEND_PORT, FRONTEND_PORT


app = FastAPI()

frontend_url = f"{FRONTEND_URL}:{FRONTEND_PORT}"
origins = [
    frontend_url,
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows specific origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
