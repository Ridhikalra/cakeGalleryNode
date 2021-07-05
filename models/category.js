const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CategorySchema = new Schema({
    title: {
        type: String,
    },
    imgUrl:{
        type:String,
    }
}, {
    versionKey: false,
    timestamps: true,
});
module.exports = category = mongoose.model("category", CategorySchema);