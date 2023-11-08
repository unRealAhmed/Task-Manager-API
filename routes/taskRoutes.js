const express = require('express');

// Create an Express Router
const router = express.Router();

// Import the task controller functions
const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

// Define routes and their corresponding controller functions
router
  .route('/')
  .get(getAllTasks) // GET all tasks
  .post(createTask); // POST a new task

router
  .route('/:id')
  .get(getTask)    // GET a single task by ID
  .patch(updateTask) // UPDATE a task by ID
  .delete(deleteTask); // DELETE a task by ID

// Export the router for use in the main application
module.exports = router;
