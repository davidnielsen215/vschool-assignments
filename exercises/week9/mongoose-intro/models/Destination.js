const mongoose = require('mongoose')
const Schema = mongoose.Schema

const destinationSchema = new Schema({
    place: {
        type: String,
        required: true
    },
    price: Number,
    timeToGo: String,
    exactDate: Date
})

module.exports = mongoose.model('destination', destinationSchema)
