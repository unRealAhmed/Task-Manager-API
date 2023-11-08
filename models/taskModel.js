const mongoose = require('mongoose');

// Define a Mongoose schema for tasks
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A task must have a name'],
    trim: true,
    maxlength: [20, 'A task name must have less or equal to 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// Create a Mongoose model for tasks using the schema
const Task = mongoose.model('Task', taskSchema);

// Export the Task model
module.exports = Task;
