const user = require('../models/user')

//show the list of users
const index = (req,res,next) => {
    user.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured!'
        })
    })
}

//show single user
const show = (req,res,next) => {
    let userID = req.body.userID
    user.findById(userID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

//add new user
const store = (req,res,next) => {
    let user = new user({
        uid: req.body.uid,
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        contact: req.body.contact
    })
    user.save()
    .then(response => {
        res.json({
            message: 'User added successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

// update an user
const update = (req,res,next) => {
    let userID = req.body.userID
    let updatedDate = {
        uid: req.body.uid,
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        contact: req.body.contact
    }
    user.findByIdAndUpdate(userID, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'User updated successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

//delete an user
const destroy = (req,res,next) => {
    let userID = req.body.userID
    user.findOneAndRemove(userID)
    .then(() => {
        res.json({
            message: 'User deleted successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

module.exports = {
    index,show,store,update,destroy
}