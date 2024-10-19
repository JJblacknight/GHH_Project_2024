# TODO List for Web Application

## Initial Page
- [ ] Create a text area component
    - [ ] Add a label for the text area
    - [ ] Add a button to submit the input

## Second Page
- [ ] Create a menu bar
    - [ ] Add two items to the menu bar
        - [ ] Link each item to a card component
- [ ] Create two card components
    - [ ] Display content based on the text input from the initial page

## General
- [ ] Set up project structure
- [ ] Implement routing between pages
- [ ] Style components with CSS
- [ ] Test the application

## Backend

### app.py
- [ ] Create method to handle HTTP post requests. Receive and send sample data
- [ ] Adjust above method to tailor to the types of input (how they're feeling) and outputs (response to how they're feeling; recommended restaurants & foods)
- [ ] Create method to handle errors in case input is invalid or emotion logic fails
- [ ] If time permits: create method to log requests & errors
- [ ] If time permits: document API endpoints for frontend

### controllers/emotion_controller.py
- [ ] Create method to return a general emotion given the user's input
- [ ] Create method to return a list of restaurants and foods from the emotion
- [ ] Create method to return a response to how they're feeling

### data/restaurants.json
- [ ] Create a list of restaurants and foods in the Charlottesville area (possibly using data scraping)
- [ ] Map each restaurant/food to emotions (use AI to help)

### tests/test_app.py
- [ ] Test receiving mock input with Postman/Insomnia
- [ ] Test sending mock output

### tests/test_emotion_controller.py
- [ ] Test convering user input to emotion
- [ ] Test retrieving restaurants & foods from emotion
- [ ] Test generating response to user input