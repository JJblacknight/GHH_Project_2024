import requests
import json
import os
from dotenv import load_dotenv
import time

UVA_LOCATION = "38.0317528,-78.5108897" # rice hall
RESTAURANT_TYPES = "restaurant|cafe|bar|bakery|meal_takeaway|meal_delivery"
RAW_FILE_NAME = 'backend/data/raw_restaurants.json'
FILE_NAME = 'backend/data/restaurants.json'
IMAGE_MAX_WIDTH = 800
MAX_RESTAURANTS = 100

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

    return all_places[:MAX_RESTAURANTS]

def simplify_place(place):
    photo_urls = []

    for photo in place.get('photos', []):
        photo_reference = photo['photo_reference']
        photo_url = f'https://maps.googleapis.com/maps/api/place/photo?maxwidth={IMAGE_MAX_WIDTH}&photoreference={photo_reference}&key={GOOGLE_API_KEY}'
        photo_urls.append(photo_url)

    return {
        'name': place.get('name'),
        'rating': place.get('rating'),
        'address': place.get('vicinity'),
        'photos': photo_urls
    }

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
    restaurants = fetch_places(params, MAX_RESTAURANTS)
    if not restaurants:
        print("Failed to find restaurants")
        return
    
    save_to_json(RAW_FILE_NAME, restaurants)

    for i, place in enumerate(restaurants):
        restaurants[i] = simplify_place(place)
    
    save_to_json(FILE_NAME, restaurants)
    print(f"Saved {len(restaurants)} restaurants to {FILE_NAME}")

if __name__ == "__main__":
    __main__()
