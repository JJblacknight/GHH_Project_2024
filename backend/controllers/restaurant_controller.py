import json

RESTAURANT_FILE = "backend/data/restaurants_with_emotions.json"
MAX_RESTAURANTS = 1

def get_restaurants(emotion):
    with open(RESTAURANT_FILE, 'r') as file:
        data = json.load(file)

    restaurants = []
    for restaurant in data:
        if emotion in restaurant.get("emotions"):
            restaurants.append(restaurant)

    return restaurants[:MAX_RESTAURANTS]

def __main__():
    print(get_restaurants('Social'))

if __name__ == '__main__':
    __main__()