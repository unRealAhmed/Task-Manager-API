const Task = require('../models/taskModel')
const asyncHandler = require('../utilities/asyncHandler')


exports.getAllTasks = asyncHandler(async (req, res) => {

  const tasks = await Task.find()

  res.status(200).json({
    status: 'success',
    results: tasks.length,
    tasks
  })
})

exports.getTask = asyncHandler(async (req, res) => {

  const task = await Task.findById(req.params.id)

  res.status(200).json({
    status: 'success',
    task
  })
})

exports.createTask = asyncHandler(async (req, res) => {

  const newTask = await Task.create(req.body)

  res.status(201).json({
    status: 'success',
    newTask
  })
})

exports.updateTask = asyncHandler(async (req, res) => {

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })

  res.status(200).json({
    status: 'success',
    updatedTask
  })
})

exports.deleteTask = asyncHandler(async (req, res) => {

  await Task.findByIdAndDelete(req.params.id)

  res.status(204).json({
    status: 'success',
    data: null
  })
})