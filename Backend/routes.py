from .app import app, db
from flask import request, jsonify
from .models import User    
from .checker import get_database_uri, check_openai_api_key
from .chatbot.total_chat import total_chat


@app.route("/api/user", methods=["GET"])
def get_user():
    users = User.query.all()
    result = [user.to_json() for user in users]
    return jsonify(result)

@app.route("/api/user", methods=["POST"])
def create_user():
    #delete all the users before adding a new one 
    User.query.delete()
    db.session.commit()

    try:
        # Check if the request contains JSON data
        if not request.is_json:
            return jsonify({"error": "Invalid content type. Expected application/json."}), 400
        
        # Access the JSON data
        data = request.get_json()
        print("Received data:", data)  # Debugging output to check request data
        
        # Check if all required fields are present
        required_fields = ["apiKey", "port", "host", "database", "password", "username"]
        for field in required_fields:
            if field not in data:
                return jsonify({"error": f"Missing required field: {field}"}), 400

        # Process the apiKey and database URI
        api_key = check_openai_api_key(data.get("apiKey"))
        database_uri = get_database_uri(
            host=data.get("host"),
            port=data.get("port"),
            user=data.get("username"),
            password=data.get("password"),
            database_name=data.get("database")
        )

        # Delete all existing users in the database
        db.session.query(User).delete()
        
        # Create new user and add to the database
        new_user = User(database_uri=database_uri, api_key=api_key)
        db.session.add(new_user)
        db.session.commit()

        # Return the newly created user as JSON
        return jsonify(new_user.to_json()), 201

    except Exception as e:
        # Rollback in case of error and log the exception
        db.session.rollback()
        print("Error:", str(e))  # Debugging output to check error
        return jsonify({"error": str(e)}), 500

@app.route("/api/user", methods=["PATCH"])
def update_user():
    # Logic for updating user goes here (e.g., updating a user's info based on request data)
    return jsonify({"message": "Patch route not implemented yet"}), 501

@app.route("/api/process-message", methods=["POST"])  # Fixed URL syntax here
def recieve_message():
    data = request.get_json()
    question = data.get("message")
    result = process_message(question)
    return jsonify({'result': result})


def process_message(user_query):
    return total_chat(user_query)
