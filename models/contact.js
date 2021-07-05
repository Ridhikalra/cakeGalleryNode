const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    userId: {
        type: String,
    },
    email: {
        type: String
    },
    message: {
        type: String
    },
}, {
    versionKey: false,
    timestamps: true,
});


module.exports = Contact = mongoose.model("contact", ContactSchema);