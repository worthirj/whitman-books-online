from flask import Flask
from flask_restful import Api
from flask_jwt import JWT
from listing import Listing, allListings
from book import Book, BookList
from user import User, UserList

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
# turns off Flask-SQL Alchemy modification tracker, not underlying SQLAlchemy modification tracker
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
api = Api(app)


@app.before_first_request
def create_tables():
    """Creates all database tables (books, listings, and users).

    Args:
        none.

    Returns:
        none.
    """
    db.create_all()


# Listing endpoints:
# must be listing_id to support POST and DELETE
api.add_resource(Listing, "/listing/<string:ids>")
api.add_resource(allListings, "/listings/<string:search>")

# Book endpoints:
api.add_resource(Book, "/book/<string:isbns>")
api.add_resource(BookList, "/booklist/<string:search>")

# user endpoints:
api.add_resource(User, "/user/<string:google_tok>")
api.add_resource(UserList, "/userlist/<string:tokens>")

if __name__ == '__main__':  # prevents app from running when being imported from elsewhere
    from db import db  # prevents circular import
    db.init_app(app)
    app.run(port=5000, debug=True)
