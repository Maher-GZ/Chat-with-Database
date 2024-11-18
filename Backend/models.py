from .app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    api_key = db.Column(db.String, nullable=False)
    database_uri = db.Column(db.String(500), nullable=False)

    def to_json(self):
        return {
            "apiKey": self.api_key,
            "databaseUri": self.database_uri
        }
