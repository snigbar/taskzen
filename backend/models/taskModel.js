const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    task:{
        type: String,
        required: true
    },
    date:{
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

module.exports = mongoose.model("AllTask",taskSchema)