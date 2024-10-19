import requests
import json
import os
from dotenv import load_dotenv
import time

UVA_LOCATION = "38.0317528,-78.5108897" # rice hall
RESTAURANT_TYPES = "restaurant|cafe|bar|bakery|meal_takeaway|meal_delivery"
FILE_NAME = 'backend/data/restaurants.json'

load_dotenv()
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')

def fetch_places(params, amount=10):
    GOOGLE_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
    response = requests.get(GOOGLE_URL, params=params)
    data = response.json()

    all_places = []
    all_places.extend(data.get('results', []))

    while 'next_page_token' in data:
        next_page_token = data['next_page_token']

        time.sleep(2) # don't spam api

        params['pagetoken'] = next_page_token
        response = requests.get(GOOGLE_URL, params=params)
        data = response.json()

        all_places.extend(data.get('results', []))

        if len(all_places) >= amount:
            break

    return all_places[:50]

def save_to_json(file_name, data):
    with open(file_name, 'w') as f:
        json.dump(data, f, indent=4)

def __main__():
    print("Finding restaurants...")

    params = {
        'location': UVA_LOCATION,
        'rankby': 'distance',
        'types': RESTAURANT_TYPES,
        'key': GOOGLE_API_KEY
    }
    restaurants = fetch_places(params)
    if not restaurants:
        print("Failed to find restaurants")
        return
    
    save_to_json(FILE_NAME, restaurants)
    print(f"Saved {len(restaurants)} restaurants to {FILE_NAME}")

    for i, restaurant in enumerate(restaurants, start=1):
        print(f"{i}. {restaurant.get('name')}")

if __name__ == "__main__":
    __main__()
