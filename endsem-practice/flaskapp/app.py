from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = (
    "postgresql://postgres:pavilion@localhost/flaskapp"
)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)


class User(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return f"<User {self.username}>"


def json(self):
    return {"id": self.id, "username": self.username, "email": self.email}


def create_tables():
    with app.app_context():
        db.create_all()


create_tables()


@app.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    return jsonify(
        [
            {"id": user.id, "username": user.username, "email": user.email}
            for user in users
        ]
    )


@app.route("/users", methods=["POST"])
def create_user():
    data = request.json
    new_user = User(username=data["username"], email=data["email"])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User created successfully"})


@app.route("/users/<int:user_id>", methods=["PUT"])
def update_user(user_id):
    user = User.query.get_or_404(user_id)
    data = request.json
    user.username = data.get("username", user.username)
    user.email = data.get("email", user.email)
    db.session.commit()
    return jsonify({"message": "User updated successfully"})


@app.route("/users/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    return jsonify({"message": "User deleted successfully"})


@app.route("/")
def home():
    return "Hello World"


if __name__ == "__main__":
    app.run(debug=True)
