# Backend

This folder contains the backend code for the Temple Directory application. The backend is built with Node.js, Express.js, and MongoDB, and provides the necessary APIs to handle CRUD operations for managing temple data.

## Stack

- Node.js
- Express.js
- MongoDB

## API Endpoints

The backend provides the following API endpoints for interacting with the temple data:

- `GET /api/temples`: Retrieves a list of all temples.
- `GET /api/temples/:id`: Retrieves details of a specific temple.
- `POST /api/temples`: Creates a new temple.
- `PUT /api/temples/:id`: Updates the information of a specific temple.
- `DELETE /api/temples/:id`: Deletes a specific temple.

## Database

The temple data is stored in a MongoDB database. The connection to the database is established using Mongoose, an Object Data Modeling (ODM) library for MongoDB and Node.js.

## Deployment

The backend API is deployed on Render, a modern cloud platform. You can access the API at the following URL:

- API Base URL: [https://your-backend-api.render.com](https://your-backend-api.render.com)

## Getting Started

To run the backend server locally, follow these steps:

1. Install Node.js and MongoDB on your machine.
2. Clone this repository and navigate to the backend folder.
3. Install the required dependencies by running the command: `npm install`.
4. Start the server with the command: `npm start`.

The server will start running at `http://localhost:3000`.

## Testing

You can test the API endpoints using a tool like Postman or by sending HTTP requests directly. Ensure that the backend server is running before testing the endpoints.

For more detailed instructions and information, refer to the [frontend README](../frontend/README.md).

If you have any questions or need further assistance, feel free to contact [Your Name] at [your-email@example.com](mailto:your-email@example.com).
