const express = require('express')
const router = express.Router()
const { addTask, myTasks, deleteTask } = require('../controllers/taskController')
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

module.exports = router