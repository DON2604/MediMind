[![tests](https://github.com/DON2604/MediMind/actions/workflows/tests.yml/badge.svg)](https://github.com/DON2604/MediMind/actions/workflows/tests.yml)

# AI Healthcare Skin Diseases Website

Welcome to our AI Healthcare Skin Diseases Website! This platform is dedicated to providing users with accurate information and insights about various skin diseases, powered by cutting-edge artificial intelligence technology. Our website is built using Vite for front-end development, Node.js for backend, and MongoDB as the database.

## Features

- **AI-Powered Diagnosis:** Our platform utilizes advanced machine learning algorithms to provide accurate diagnosis and information about skin diseases based on uploaded images or symptoms entered by the user.
- **Comprehensive Database:** We maintain a comprehensive database of various skin diseases, symptoms, and treatment options, constantly updated with the latest medical research and findings.
- **Personalized Recommendations:** Users can receive personalized recommendations for skincare routines and products based on their skin type and specific conditions.
- **Interactive User Interface:** Our website features a user-friendly interface, making it easy for users to navigate, upload images, enter symptoms, and access relevant information.
- **Secure Data Handling:** We prioritize the security and privacy of user data, ensuring that all information uploaded or entered by users is handled securely and in compliance with data protection regulations.

## Technologies Used

- **Vite:** Vite is used for front-end development, providing a fast and efficient development experience with its modern build tooling capabilities.
- **Express.js:** Node.js powers the backend of our website, enabling seamless server-side logic and integration with our MongoDB database.
- **MongoDB:** MongoDB serves as the database for storing user data, medical information, and other relevant content. Its flexibility and scalability make it ideal for managing diverse data types.
- **Gemini:** Gemini is used for artificial intelligence and machine learning (AIML) capabilities, powering the advanced algorithms for diagnosing skin diseases and providing personalized recommendations.
- **NodeMailer:** Nodemailer helped us to send confirmation mail to the user
- **openstreetmap:** Provided us with map and integration

## Installation

To run the website locally, follow these steps:

1. Clone the repository: `git clone https://github.com/DON2604/MediMind.git`

2. Run the Frontend

   a. Navigate to the frontend directory: `cd frontend`

   b. Install dependencies: `npm install`

   c. Start the development server: `npm run dev`


3. Run the Backend

   a. Navigate to the backend directory: `cd backend`

   b. Install dependencies: `npm install` 3. Create a .env file add APIs like this

        ```bash
        MONGODB_URI=YOUR_MONGODB_DATABASE_URL
        PORT=8000
        CORS_ORIGIN=*
        ACCESS_TOKEN_SECRET=SET_AN_ACCESS_TOKEN
        ACCESS_TOKEN_EXPIRY=1d
        REFRESH_TOKEN_SECRET=SET_A_REFRESH_TOKEN
        REFRESH_TOKEN_EXPIRY=7d
        GEMINI_API=YOUR_GEMINI_KEY
        EMAIL=YOUR_OUTLOOK_EMAIL_ADDRESS
        PASSWORD=EMAIL_ADDRESS_PASSWORD
        ```

   c. Start the development server: `npm run dev`

## Feedback and Support

Thank you for using our AI Healthcare Skin Diseases Website! We hope it provides valuable insights and assistance for managing skin-related concerns.
