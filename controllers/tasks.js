const express = require('express');
const app = express();
const Task = require('../models/task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom_error');
app.use(express.json())


const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({tasks})
})

const getSingleTask = asyncWrapper(async (req, res, next) => {
 
    const {id: taskID} = req.params;
    const task = await Task.findOne({_id: taskID}) 
    if (!task) {
      return next(createCustomError(`Not Found, No task with ID ${taskID}`, 404))

    }
    res.status(200).json({task})
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
  })


const updateTasks = asyncWrapper( async (req, res) => {

    const {id: taskID} = req.params;
    const update = req.body;
    const updatedTask = await Task.findOneAndUpdate({_id: taskID}, update, {new: true, runValidators: true})
    if (!updatedTask) {
      return next(createCustomError(`Not Found, No task with ID ${taskID}`, 404))
    }
    res.status(201).json({updatedTask})
})

const deleteTask = asyncWrapper( async (req, res) => {
    const {id: taskID} = req.params;
    const task = await Task.findOneAndDelete({_id: taskID}) 
    if (!task) {
      return next(createCustomError(`Not Found, No task with ID ${taskID}`, 404))
    }
    res.status(200).json({status: "Successfully deleted", task: task})
})

module.exports = {getAllTasks, getSingleTask, createTask, updateTasks, deleteTask}