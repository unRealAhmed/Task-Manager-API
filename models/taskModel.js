const mongoose = require('mongoose')

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
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task