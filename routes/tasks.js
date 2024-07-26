const express = require('express')

const router = express.Router()
const { getAllTasks, createTask, getSingleTask, updateTasks, deleteTask } = require('../controllers/tasks')


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getSingleTask).patch(updateTasks).delete(deleteTask)


module.exports = router