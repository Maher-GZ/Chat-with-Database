import sys
import os

# Add the parent directory of the Backend folder to the system path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

# Import the Flask app from Backend.app
from Backend.app import app

if __name__ == "__main__":
    # Define the port, defaulting to 4000 if no environment variable is set
    port = int(os.environ.get("PORT", 4000))
    
    # Run the Flask app
    app.run(host="0.0.0.0", port=port)
