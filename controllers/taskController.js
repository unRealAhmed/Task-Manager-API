const Task = require('../models/taskModel');
const asyncHandler = require('../utilities/asyncHandler');
const AppError = require('../utilities/appErrors');

// Get all tasks
exports.getAllTasks = asyncHandler(async (req, res, next) => {
  const tasks = await Task.find();

  res.status(200).json({
    status: 'success',
    results: tasks.length,
    data: {
      tasks,
    },
  });
});

// Get a single task by ID
exports.getTask = asyncHandler(async (req, res, next) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return next(new AppError('No task found with that ID!', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      task,
    },
  });
});

// Create a new task
exports.createTask = asyncHandler(async (req, res, next) => {
  const newTask = await Task.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      task: newTask,
    },
  });
});

// Update a task by ID
exports.updateTask = asyncHandler(async (req, res, next) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedTask) {
    return next(new AppError('No task found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      task: updatedTask,
    },
  });
});

// Delete a task by ID
exports.deleteTask = asyncHandler(async (req, res, next) => {
  const task = await Task.findByIdAndDelete(req.params.id);

  if (!task) {
    return next(new AppError('No task found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
