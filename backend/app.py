from flask import Flask, request, jsonify

app = Flask(__name__)

def get_restaurants(emotion):
    # TODO: Generate a list of restaurants based on the emotion

    restaurants = {}

    return restaurants

def get_emotion(user_input):    
    # TODO: Determine the emotion based on the user input
    
    emotion = "happy"

    return emotion

@app.route('/api/emotion', methods=['POST'])
def handle_request():
    try:
        data = request.get_json()
        if not data or 'user_input' not in data:
            return jsonify({"error": "Invalid input. Please provide 'user_input'."}), 400
        user_input = data['user_input']
        
        emotion = get_emotion(user_input)
        restaurants = get_restaurants(emotion)

        # Return a JSON response
        return jsonify({
            "user_input": user_input,
            "emotion": emotion,
            "restaurants": restaurants
        }), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
