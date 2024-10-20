import json
import random

RESTAURANT_FILE = "backend/data/restaurants_with_emotions.json"
MAX_RESTAURANTS = 1
DEBUG = True

def get_restaurants(emotion):
    try:
        with open(RESTAURANT_FILE, 'r') as file:
            data = json.load(file)

        restaurants = []
        for restaurant in data:
            if emotion in restaurant.get("emotions"):
                restaurants.append(restaurant)

        random.shuffle(restaurants)

        return restaurants[:MAX_RESTAURANTS]
    except Exception as e:
        if DEBUG:
            print(f"error in get_restaurants: {e}")
        return []

def __main__():
    print(get_restaurants('Social'))

if __name__ == '__main__':
    __main__()