const mongoose = require("mongoose");

let imageSchema = new mongoose.Schema({
    title:{
        type: String
    },
    image:{
        type:String,
        required: true
    }
})

const imageModel = new mongoose.model("image",imageSchema);

module.exports = imageModel;