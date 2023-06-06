const mongoose = require('mongoose')
const AllTasks = require('../models/taskModel')

const addTask = async(req, res)=>{
    const {name,email,task,date} = req.body;

    if(!name && !email && !task && !date) return res.status(400).json({ error: 'Please fill in all fields'})
    try {
        const addTask = await AllTasks.create({ name,email,task,date})
        res.status(200).json({added: true, message:"Added Successfully"})
      } catch (error) {
        res.status(400).json({ error: error.message })
      }
}

const myTasks =  async(req,res) =>{
    const {email} = req.query;
    const query = {email: email}
    const myTask = await AllTasks.find(query).sort({date: 1})
    res.json(myTask)
}

// delelte a task
const deleteTask =  async(req,res) =>{
    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such workout'})
    }

    const thatTask = await AllTasks.findOneAndDelete({_id: id})
    
    if(!thatTask) {
        return res.status(400).json({error: 'No such workout'})
    }
    console.log(thatTask)
    res.status(200).json(thatTask)
    
}

// get a task

const getATask = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such workout'})
    }
  
    const workout = await AllTasks.findById(id)
  
    if (!workout) {
      return res.status(404).json({error: 'No such workout'})
    }
  
    res.status(200).json(workout)
  }

  // update a task

  const updateTask = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No Taskfound'})
    }
    console.log(req.body)
    const updated = await AllTasks.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!updated) {
      return res.status(400).json({error: 'no task to update'})
    }
  
    res.status(200).json({updated: true, message:"updated Successfully"})
  }

module.exports = {
    addTask,
    myTasks,
    deleteTask,
    getATask,
    updateTask
  }