from dotenv import load_dotenv
import os

STAGE = os.getenv("STAGE", "dev")
BACKEND_URL = os.getenv("BACKEND_URL", "http://localhost")
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:3000")
BACKEND_PORT = int(os.getenv("BACKEND_PORT", 80))
FRONTEND_PORT = int(os.getenv("FRONTEND_PORT", 3000))
if STAGE == "dev":
    POSTGRES_URL = os.getenv("POSTGRES_DEV_URL", "postgresql://user:password@localhost/dbname")
else:
    raise NotImplementedError
    POSTGRES_URL = os.getenv("POSTGRES_URL", "postgresql://user:password@localhost/dbname")