const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = newSchema ({
    uid: {
        type: String
    },
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    email: {
        type: String
    },
    contact: {
        type: String
    }
}, {timestamps: true})

const user=mongoose.model('user',userSchema)
module.exports = user