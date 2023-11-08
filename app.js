// Import necessary modules and configure environment
require("dotenv").config({ path: "./config.env" });
const express = require('express');
const taskRouter = require("./routes/taskRoutes");

// Create an Express application
const app = express();

// Middleware: Parse JSON in request body
app.use(express.json());

// Routes: Use the task router for handling task-related routes
app.use('/api/v1/tasks', taskRouter);

// Database Connection: Connect to the database
const connectDatabase = require("./utilities/dataBase");

connectDatabase();

// Error Handling Middleware: Handle requests for undefined routes
app.all("*", (req, _, next) => {
  // Create a custom error for 404 Not Found
  const err = new Error(`Can't Find ${req.originalUrl}`);
  err.status = "fail";
  err.statusCode = 404;
  err.isOperational = true;
  next(err);
});

// Error Controller: Handle errors generated during request processing
const errorController = require("./controllers/errorController");

app.use(errorController);

// Define the server's port
const port = process.env.PORT || 8000;

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
