const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    charge: String,
    name: String,
    class: String,
    offense: String,
    reward: Number
})

module.exports = mongoose.model('bounty', bountySchema)