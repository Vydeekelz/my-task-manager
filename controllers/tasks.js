const express = require('express');
const app = express();
const Task = require('../models/task');
const task = require('../models/task');
app.use(express.json())


const getAllTasks = async (req, res) => {
  try { 
    const tasks = await Task.find({});
    res.status(200).json({tasks})
    
  } catch (error) {
    res.status(500).json(error.message)
  }
}

const getSingleTask = async (req, res) => {
  try { 
    const {id: taskID} = req.params;
    const task = await Task.findOne({_id: taskID}) 
    if (!task) {
      return res.status(200).json({status: "success", message : `No task with ID ${taskID}`})
    }
    res.status(200).json({task})
    
  } catch (error) {
    res.status(500).json(error.message)
  }

}

const createTask = async (req, res) => {
  try { 
    const task = await Task.create(req.body)
    res.status(201).json({task})
    
  } catch (error) {
    
    res.status(500).json(error.message)
    
  }
}

const updateTasks = async (req, res) => {
  try {
    const {id: taskID} = req.params;
    const update = req.body;
    const updatedTask = await Task.findOneAndUpdate({_id: taskID}, update, {new: true, runValidators: true})
    if (!updatedTask) {
      return res.status(404).json({status: "Request sent", message : `No task with ID ${taskID}`})
    }
    res.status(201).json({updatedTask})

    
  } catch (error) {
    res.status(500).json(error.message)
  }

}

const deleteTask = async (req, res) => {
  try { 
    const {id: taskID} = req.params;
    const task = await Task.findOneAndDelete({_id: taskID}) 
    if (!task) {
      return res.status(404).json({status: "Request sent", message : `No task with ID ${taskID}`})
    }
    res.status(200).json({status: "Successfully deleted", task: task})
    
  } catch (error) {
    res.status(500).json(error.message)
  }
}

module.exports = {getAllTasks, getSingleTask, createTask, updateTasks, deleteTask}