from flask import Flask,send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os 


app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///friends.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

frontend_folder= os.path.join(os.getcwd(),"..","Frontend","dist")

@app.route("/",defaults={"filename":""})
@app.route("/<path:filename>")
def index (filename):
    if not filename:
        filename = "index.html"
    return send_from_directory(frontend_folder,filename)
# Ensure routes are imported after db initialization to avoid circular imports
from . import routes

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    import os
    
    # Use the PORT environment variable or default to 5000
    port = int(os.environ.get("PORT", 5000))
    
    # Run the app with debug mode enabled
    app.run(debug=True, host="0.0.0.0", port=port)

