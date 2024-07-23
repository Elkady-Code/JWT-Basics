# JWT-Basics

## Overview
This repository contains a JWT-Basics API built using Node.js and Express. The API provides endpoints for user authentication and accessing a protected dashboard. It is designed to demonstrate the basics of using JSON Web Tokens (JWT) for authentication and authorization.

## Features
- User Login: Authenticate users and provide them with a JSON Web Token (JWT) for accessing protected routes.
- Dashboard Access: Retrieve user-specific information from a protected dashboard endpoint.
- JWT Authentication: Securely authenticate and authorize users using JWT.

## Technologies Used
- Node.js: JavaScript runtime for server-side development.
- Express: Fast, unopinionated, minimalist web framework for Node.js.
- JWT: JSON Web Tokens for securing user authentication.

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
