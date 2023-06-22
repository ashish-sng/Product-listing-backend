# Job Listing Platform - Server

## Description
Job Listing Platform is a web application built using the MERN stack (MongoDB, Express, React, Node.js). This repository contains the server-side code for the Job Listing Platform. The server provides the API endpoints and handles the business logic for user authentication, project management, and data storage. JWT tokens are used for authorization and authentication.

## Demo Video

https://github.com/ashish-sng/Product-listing-backend/assets/68745052/5d0c7792-fb79-4b4f-bc5e-81502b8c480e

## Installation

1. Clone the repository:

   git clone https://github.com/ashish-sng/Product-listing-backend

2. Navigate to the server directory:

   cd job-listing-platform/server

3. Install the dependencies:

   npm install

4. Set up environment variables:
   - Create a `.env` file in the server directory.
   - Add the necessary environment variables (e.g., MongoDB connection string, JWT secret, etc.) to the `.env` file.

5. Start the server:

   node server.js

   The server will be running on `http://localhost:4000`.

## Features

- RESTful API endpoints for user authentication, project management, and data retrieval.
- Integration with MongoDB for data storage and retrieval.
- JWT token-based authentication and authorization for secure access.
- Express.js framework for building the API.
- Error handling and validation of incoming requests.
- Middleware for request logging and authentication.

## API Endpoints

- **POST /register**: Register a new user.
- **POST login**: Log in an existing user.
- **GET /products**: Get all products.
- **GET /products/:id**: Get a specific project by ID.
- **POST /products**: Add a new project.
- **PUT /products/:id**: Update a project by ID.
- **PUT /products/:id/like**: Increase the like count for a project by ID.
- **POST /comments**: Add a comment to a project by ProductID i.e. added with the comment.
- **GET /comments/:productID**: Get comments for each product

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
