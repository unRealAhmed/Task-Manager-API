require("dotenv").config({ path: "./config.env" });
const express = require('express')
const taskRouter = require("./routes/taskRoutes");

//Middleware
const app = express()
app.use(express.json())

//Routes
app.use('/api/v1/tasks', taskRouter)


// Error Handler
app.all("*", (req, _, next) => {
  const err = new Error(`Can't Find ${req.originalUrl}`);
  err.status = "fail";
  err.statusCode = 404;

  next(err);
});

const errorController = require("./controllers/errorController");

app.use(errorController)

// Connect to the database
const connectDatabase = require("./utilities/dataBase");

connectDatabase();

// Define the server's port
const port = process.env.PORT || 8000;

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
