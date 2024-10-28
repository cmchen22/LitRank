# backend/app.py
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/books', methods=['GET'])
def get_books():
    # This will return a simple JSON response for testing
    books = [
        {"id": 1, "title": "To Kill a Mockingbird", "rating": 4.5},
        {"id": 2, "title": "1984", "rating": 4.7}
    ]
    return jsonify(books)

if __name__ == '__main__':
    app.run(debug=True)