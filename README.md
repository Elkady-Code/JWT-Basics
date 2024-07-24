# JWT-Basics

## Overview
This repository contains a JWT-Basics API built using Node.js and Express. The API provides endpoints for user authentication and accessing a protected dashboard. It is designed to demonstrate the basics of using JSON Web Tokens (JWT) for authentication and authorization.

## Features
- **User Login**: Accepts a username and password to create a user session.
- **JWT Authentication**: Generates a JWT token upon login and verifies it for accessing protected routes.
- **Protected Dashboard**: Users can access a protected dashboard route after authentication.
- **Basic Frontend**: Provides a simple HTML/CSS interface for user interaction.

## Technologies Used
- Node.js: JavaScript runtime for server-side development.
- Express: Fast, unopinionated, minimalist web framework for Node.js.
- JWT: JSON Web Tokens for securing user authentication.

## Frontend

The project includes a basic HTML page located in the `public` folder. It provides a simple interface to interact with the backend API. Users can enter their username and password, receive a JWT token, and access the protected dashboard.

### index.html

- **Login Form**: Allows users to enter their credentials and receive a JWT token.
- **Dashboard Access**: Users can access the protected dashboard after successful login.
![image](https://github.com/user-attachments/assets/1dfd52d4-4957-457c-89db-8c87948f6f75)

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/Elkady-Code/JWT-Basics
    ```
2. Navigate to the project directory:
    ```sh
    cd jwt-basics
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Set up environment variables (create a `.env` file in the root directory):
    ```env
    PORT=3000
    JWT_SECRET=your_jwt_secret
    ```
5. Start the server:
    ```sh
    npm start
    ```

## Usage
After starting the server, you can use tools like Postman or cURL to interact with the API endpoints.

### API Endpoints
### 1. Login

- **URL**: `/login`
- **Method**: `POST`
- **Description**: Authenticates the user and returns a JWT token.
- **Request Body**:

  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
- **Response Body**:
  ```json
  {
  "msg": "User Created",
  "token": "your_jwt_token"
  }
### 2. Dashboard

- **URL**: `/dashboard`
- **Method**: `GET`
- **Description**: Returns a protected message for authenticated users.
- **Headers**:
  - `Authorization`: Bearer `your_jwt_token`
- **Response**:

  ```json
  {
    "msg": "Hello, your_username",
    "secret": "Here is your authorized data. Your lucky number is 42"
  }
#### User Authentication
- **POST /api/v1/login**
  - Request: `{ "username": "your_username", "password": "your_password" }`
  - Response: `{ "msg": "User Created", "token": "your_jwt_token" }`

#### Dashboard
- **GET /api/v1/dashboard**
  - Headers: `{ "Authorization": "Bearer your_jwt_token" }`
  - Response: `{ "msg": "Hello, username", "secret": "Here is your authorized data your lucky number is X" }`

## Example Requests
- Log in a user:
  ```sh
  POST /api/v1/login

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License.
