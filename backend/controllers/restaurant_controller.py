import json

RESTAURANT_FILE = "backend/data/restaurants_emotions.json"
MAX_RESTAURANTS = 3

def get_restaurants(emotion):
    # Load restaurants data from the JSON file
    with open(RESTAURANT_FILE, 'r') as file:
        data = json.load(file)

    # Initialize a list to hold filtered restaurants
    restaurants = []

    # Filter restaurants based on the emotion
    for restaurant in data:
        if emotion in restaurant.get("emotions"):
            restaurants.append(restaurant)

    return restaurants[:MAX_RESTAURANTS]

def __main__():
    print(get_restaurants('Social'))

if __name__ == '__main__':
    __main__()