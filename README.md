# Task Manager Application

Task Manager is a web application built using Express.js for managing tasks. It allows users to create, retrieve, update, and delete tasks, as well as handle error cases gracefully.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Error Handling](#error-handling)

## Features

- Create new tasks with names and completion status.
- Retrieve a list of all tasks.
- Retrieve a single task by ID.
- Update an existing task.
- Delete a task by ID.
- Custom error handling for both development and production environments.
- MongoDB database integration using Mongoose.
- Express.js for handling HTTP requests and routing.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine.
- MongoDB installed and running.
- A `.env` file with the necessary environment variables, including `DATABASE_URL` and `DATABASE_PASSWORD`.

## Usage

Clone this repository:

```sh
git clone https://github.com/unRealAhmed/Task-Manager-API
```

## Install project dependencies

npm install

## Create a .env file in the project root directory and define your environment variables

DATABASE_URL=mongodb://<username>:<password>@<cluster-url>/<database-name>
DATABASE_PASSWORD=your-db-password
PORT=8000

## Usage

After installation, the app will be running on http://localhost:8000. You can use tools like Postman or make HTTP requests directly to the defined routes

## Routes

GET /api/v1/tasks - Retrieve a list of all tasks.
POST /api/v1/tasks - Create a new task
GET /api/v1/tasks/:id - Retrieve a single task by ID.
PATCH /api/v1/tasks/:id - Update a task by ID
DELETE /api/v1/tasks/:id - Delete a task by ID

For detailed information about the routes, please refer to the app's source code or the documentation

## Error Handling

The application handles errors gracefully using custom error classes and middleware. Errors are categorized into "fail" (client errors) and "error" (server errors), and appropriate responses are provided based on the environment (development/production)
