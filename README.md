# Where Should I Eat?

Enter how you're feeling to receive a recommended restaurant to eat in Charlottesville.

## Features

- **Emotion Recognition:** Use ChatGPT to recognize the emotion the user is feeling from a predetermined list of 11 common emotions (Stressed, Adventurous, Tired, Excited, Sad, Romantic, Social, Hungry, Bored, Healthy, Affordable).
- **Restaurant Recommendation:** Uses a generated list of the 60 closest restaurants, cafes, bakeries, bars, takeout, and delivery places from UVA (scraped from Google Maps API).
- **ChatGPT Integration:** Uses ChatGPT to provide a response to the user's input.
- **Recommendation Algorithm:** A simple algorithm finds the best restaurant to recommend to the user based on their emotion.
- **Restaurant Information:** Displays restaurant name, address, and picture.

## Installation and Usage

### Prerequisites

- Node.js
- Python 3.x
- npm

### Installation

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/yourusername/where-should-i-eat.git
   cd where-should-i-eat
    ```

2. **Set Up the Backend:**

   * Navigate to the backend directory:
        ```sh
        cd backend
        ```

   * Create a virtual environment (optional but recommended):
        ```sh
        python -m venv venv
        ```

   * Activate the virtual environment:
        ```sh
        venv\\Scripts\\activate
        ```

   * Install the required dependencies:
        ```sh
        pip install -r requirements.txt
        ```

    * Create a .env file in the backend directory and add your API keys:
        ```
        CHATGPT_API_KEY=your_chatgpt_api_key
        ```

    * Run the backend server:
        ```sh
        python app.py
        ```

3. **Set Up the Frontend:**

    * Navigate to the frontend directory:
        ```sh
        cd ../frontend
        ```

   * Install the required dependencies:
       ```sh
       npm install
       ```

   * Run the frontend development server:
       ```sh
       npm run dev
       ```

   * Access the application in your browser at:
       ```sh
       http://localhost:3000
       ```

### Usage
1. Open the application in your browser.
2. Enter how you're feeling in the input box.
3. Get a recommended restaurant based on your emotion, including the name, address, and picture of the restaurant.

## Technologies Used
* Frontend:
  * Next.js
  * shadcn/ui
* Backend:
    * Python
    * Flask
    * Google Maps API
    * ChatGPT API
* Testing and Version Control:
    * Postman for API testing
    * Git for source and version control

## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
No License

## Contact
For support or inquiries, please contact:
@jjblacknight
@andrewguilas