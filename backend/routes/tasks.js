const express = require('express')
const router = express.Router()
const { addTask, myTasks, deleteTask, getATask, updateTask } = require('../controllers/taskController')
const AllTasks = require('../models/taskModel')


// started
router.get('/', (req,res) =>{
    res.json('hello working')
})
// add a task
router.post('/post', addTask)
// get my task
router.get('/mytask', myTasks)
// delete a task
router.delete('/mytask/:id', deleteTask)
// get a task
router.get('/update/:id', getATask)

// update task
router.patch('/update/:id', updateTask)
module.exports = router