import mysql.connector
from mysql.connector import Error
import openai
from openai import OpenAI
from openai import AuthenticationError
import os 
def get_database_uri(host, port, user, password, database_name):
    try:
        # Connect to the MySQL server
        connection = mysql.connector.connect(
            host=host,
            port=port,
            user=user,
            password=password
        )

        # Create a cursor to execute the query
        cursor = connection.cursor()
        cursor.execute("SHOW DATABASES")

        # Fetch all databases and check if the specified one exists
        databases = cursor.fetchall()
        database_exists = any(db[0] == database_name for db in databases)

        # Close the cursor and connection
        cursor.close()
        connection.close()

        # Return the database URI if it exists, otherwise return None
        if database_exists:
            db_ui=f"mysql+mysqlconnector://{user}:{password}@{host}:{port}/{database_name}"
            db_ui=db_ui
            return db_ui
        
        else:
            return None

    except Error as e:
        print(f"Error connecting to MySQL: {e}")
        return None
    

def check_openai_api_key(api_key):
    try:
        os.environ['OPENAI_API_KEY']=api_key
        api_key=api_key

        return api_key

    except AuthenticationError:
        # If there's an authentication error, return None
        return None
