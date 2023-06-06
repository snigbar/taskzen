require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const port = process.env.PORT || 5000;
const tasksRoute = require('./routes/tasks.js')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api',tasksRoute)


mongoose.connect(`mongodb+srv://${process.env.DB_USER}@cluster0.i0dajrz.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(port)
  })
  .catch((err) => {
    console.log(err)
  }) 
