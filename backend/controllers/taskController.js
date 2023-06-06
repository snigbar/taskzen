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

module.exports = {
    addTask,
    myTasks,
    deleteTask
  }