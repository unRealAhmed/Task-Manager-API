require("dotenv").config({ path: "./config.env" });
const express = require('express');
const taskRouter = require("./routes/taskRoutes");

// Middleware
const app = express();
app.use(express.json());

// Routes
app.use('/api/v1/tasks', taskRouter);

// Connect to the database
const connectDatabase = require("./utilities/dataBase");

connectDatabase();

// Error Handling Middleware
app.all("*", (req, _, next) => {
  const err = new Error(`Can't Find ${req.originalUrl}`);
  err.status = "fail";
  err.statusCode = 404;
  err.isOperational = true;
  next(err);
});

// Error Controller
const errorController = require("./controllers/errorController");

app.use(errorController);

// Define the server's port
const port = process.env.PORT || 8000;

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
