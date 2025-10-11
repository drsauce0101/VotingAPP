# venv activation command line .\venv\Scripts\Activate

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

# CORS configuration
CORS(app)

# TEMP database using python "items".
items = {
    1: {'name': 'Python', 'votes': 0},
    2: {'name': 'JavaScript', 'votes': 0},
    3: {'name': 'C#', 'votes': 0}
}

# Getting the routes
@app.route('/items', methods=['GET'])
def get_items():
    """Runs when FrontEND asks for GET."""
    return jsonify(items)

# Registring a new vote
@app.route('/vote/<int:item_id>', methods=['POST'])
def vote(item_id):
    """Run when FrontEND sends POST."""
    if item_id in items:
        # If the id exists, add +1.
        items[item_id]['votes'] += 1
        return jsonify({'message': f'Vote for {item_id} sucessful!'})
    else:
        # Error if the ID is not found.
        return jsonify({'error': 'Item not found!'}), 404

if __name__ == '__main__':
    # app.run() start the server.
    # debug=True auto restart the server.
    app.run(debug=True)