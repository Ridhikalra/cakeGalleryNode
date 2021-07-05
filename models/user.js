const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema ({
    username: {
        type: String
    },
    email: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    mobileNo: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zipcode: {
        type: String
    },
    country: {
        type: String
    },
    userImg: {
        type: String
    },

}, {timestamps: true})

const user=mongoose.model('user',userSchema)
module.exports = user