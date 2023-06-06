const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    details:{
        type: String,
        required: true
    },
    completed:{
        type: Boolean,
        required: true,
        default: false
    },
   
}, 
{ timestamps: true })

module.export = mongoose.model("allTasks",taskSchema)