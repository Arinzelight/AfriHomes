# AfriHomes

AfriHomes is a real estate website designed to help users find and list properties. It features a modern frontend built with React and Vite, styled using Tailwind CSS, and a robust backend built with Node.js, Express, and MongoDB.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Property listings with detailed descriptions
- Search and filter functionality
- User profiles with saved properties
- Admin dashboard for managing listings and users

## Technologies Used

### Frontend

- React
- Vite
- Tailwind CSS

### Backend

- Node.js
- Express
- MongoDB

## Project Structure

The project is divided into two major folders:

- `client`: Contains the frontend code
- `api`: Contains the backend code

```
AfriHomes/
│
├── client/
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── App.jsx
│ │ ├── index.css
│ │ ├── main.jsx
│ └── package.json
│
└── api/
├── controllers/
├── models/
├── routes/
├── middleware/
├── server.js
├── .env
└── package.json
```

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/AfriHomes.git
   cd AfriHomes

   ```

2. Install dependencies for both the frontend and backend:

   ```cd client
   npm install
   cd ../api
   npm install

   ```

## Running the Application

## Frontend

```cd client
npm run dev
```

## Backend

1. Navigate to the api directory:

```cd api

```

2. Create a .env file and add your MongoDB URI and other environment variables:

````MONGODB_URI=your_mongodb_uri
PORT=5000
JWT_SECRET=your_jwt_secret```

3. Start the backend server:

```npm start```

## API Endpoints:

Here are some of the main API endpoints:

- POST /api/auth/register: Register a new user
- POST /api/auth/login: Login a user
- GET /api/properties: Get all properties
- POST /api/properties: Create a new property (admin only)
- GET /api/properties/:id: Get a single property
- PUT /api/properties/:id: Update a property (admin only)
- DELETE /api/properties/:id: Delete a property (admin only)
  For a full list of endpoints, refer to the documentation in the api/routes directory.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

````
