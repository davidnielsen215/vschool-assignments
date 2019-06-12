const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 2005

app.use(express.json())

app.use('/bounty', require('./bountyRoutes'))

mongoose.connect('mongodb://localhost:27017/bounty-hunter', {useNewUrlParser: true})
    .then(()=> {
        console.log('connected to the database')
    })

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

