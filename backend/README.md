~ Web Project API

Web Project Manager is a web application that allows users to manage a list of web projects easily. With this app, you can effortlessly keep track of your projects, update project details, add new projects, and delete existing ones.

# Features

View Projects: View a list of all web projects.

Add Project: Add a new web project to the list.

Update Project: Update details of an existing web project.

Delete Project: Delete a web project from the list.

# Technologies Used

Frontend: React.js
Backend: Node.js with Express.js
Database: MongoDB
Styling: CSS

## How to Use

# Prerequisites

Node.js installed on your machine
MongoDB installed and running locally or accessible remotely

# Installation

Clone this repository to your local machine.
Navigate to the project directory in your terminal.
Install dependencies by running npm install.

# Backend Setup

Navigate to the backend directory.
Create a .env file and configure your MongoDB connection string.
Run the backend server by running npm start

# Frontend Setup

Navigate back to the root directory.
Run the frontend server by running npm start.

# Accessing the Application

Once the backend and frontend servers are running, you can access the web application by visiting http://localhost:3000 in your web browser.

## API Documentation

The backend server provides the following API endpoints:

GET /api: Get a list of all web projects.
POST /api: Add a new web project.
PUT /api/:id: Update an existing web project.
DELETE /api/:id: Delete a web project.

For detailed usage instructions.

# Instruction for testing with Postman

1. Get web project Items
   . Endpoint:`http:localhost:8080/api`
   . Method: Get
   . Expected Response: Array of web project items

2. Add web project Item
   . Endpoint: `http://localhost:8080/api`
   . Method: post (Add Key, Value, description)
   . Request Body: JSON representing the new Web Project item
   . Expected Response: JSON of the added Web Project item.

3. Delete web Project Item
   . Endpoint: `http://localhost:8080/api/:title`(title it is a dynamic parameter representing the title of the web project item)
   . Method: delete (Request that a resource be removed or deleted )
   . Expected Response: Confirmation delete

4. Update Web Project Item
   . Endpoint: `http://localhost:8080/api/:title`
   . Method:update (Replace key, value, description)
   . Expected Response: Confirmation changes

# License

Thank you for using Web Project Manager! If you have any questions or issues, please feel free to contact Monica Carta.
