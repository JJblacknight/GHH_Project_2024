from flask import Flask, request, jsonify
from controllers.emotion_controller import get_emotion
from controllers.restaurant_controller import get_restaurants

app = Flask(__name__)

@app.route('/api/emotion', methods=['POST'])
def handle_request():
    try:
        data = request.get_json()
        if not data or 'user_input' not in data:
            return jsonify({"error": "Invalid input. Please provide 'user_input'."}), 400
        user_input = data['user_input']
        
        emotion = get_emotion(user_input)
        restaurants = get_restaurants(emotion)

        return jsonify({
            "user_input": user_input,
            "emotion": emotion,
            "restaurants": restaurants
        }), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
