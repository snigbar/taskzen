const express = require('express')
const router = express.Router()


// GET all 
router.get('/', (req,res) =>{
    res.json('hello working')
})


module.exports = router