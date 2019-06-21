const express = require('express')
const app = express()
const PORT = 4444
const mongoose = require('mongoose')

//express middleware
app.use(express.json())

app.use('/destination', require('./destinationRoutes'))

mongoose.connect('mongodb://localhost:27017/bounty-hunter', {useNewUrlParser: true})
    .then(()=> {
        console.log('Connected to MongoDB')
    })

app.listen(PORT, () => {
    console.log(`Matrix has you on port ${PORT}`)
})
 