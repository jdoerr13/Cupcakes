"""Models for Cupcake app."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

DEFAULT_IMAGE = "https://tinyurl.com/demo-cupcake"
def connect_db(app):
    db.app = app
    db.init_app(app)


class Cupcake(db.Model):
    """Cupcake"""

    __tablename__ = "cupcakes"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    flavor = db.Column(db.Text, nullable=False)
    size = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Float, nullable=False)
    image = db.Column(db.Text, nullable=False, default=DEFAULT_IMAGE)
#define a serializing method to turn it into a dictionary representation in order to be able to use jasonify
    def serialize(self):
        """Returns a dict representation of cupcake (serialize) which we can turn into JSON"""
        return {
            #instance methods go here
            'id': self.id,
            'flavor': self.flavor,
            'rating': self.rating,
            'size': self.size,
            'image': self.image
        }

    def __repr__(self):
        return f"<Cupcake {self.id} title={self.title} done={self.done} >"