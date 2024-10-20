from flask import Flask, request, jsonify
from flask_cors import CORS
from controllers.emotion_controller import get_emotion
from controllers.restaurant_controller import get_restaurants

DEBUG = True

app = Flask(__name__)
CORS(app)

@app.route('/api/emotion', methods=['POST'])
def handle_request():
    try:
        data = request.get_json()
        if not data or 'user_input' not in data:
            return jsonify({"error": "Invalid input. Please provide 'user_input'."}), 400
        user_input = data['user_input']

        if DEBUG:
            print(f"Received user input: {user_input}")

        emotion = get_emotion(user_input)
        restaurants = get_restaurants(emotion)
        output = {
            "user_input": user_input,
            "emotion": emotion,
            "restaurants": restaurants
        }

        if DEBUG:
            print(f"Output: {output}")

        return jsonify(output), 200

    except Exception as e:
        output = {"error": str(e)}
        
        if DEBUG:
            print(f"Error: {output}")

        return jsonify(output), 500

if __name__ == '__main__':
    app.run(debug=True)
