from sqlalchemy import create_engine
from sqlalchemy.exc import SQLAlchemyError

# 1. Define your MySQL database credentials
DB_USER = "root"
DB_PASSWORD = "d@t@"
DB_HOST = "localhost"        # Use "127.0.0.1" or your server IP if remote
DB_PORT = "3306"             # 3306 is the default MySQL port
DB_NAME = "dev10_collective"
 
# 2. Construct the database URL
DATABASE_URL = f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
 
# 3. Create the engine
# 'echo=True' will print all generated SQL queries to your console (great for debugging)
engine = create_engine(DATABASE_URL, echo=True)
 
# 4. Test the connection
try:
    with engine.connect() as connection:
        print("Successfully connected to the MySQL database!")
except SQLAlchemyError as e:
    print(f"An error occurred while connecting to the database: {e}")