const mongoose = require("mongoose")


//Define the schema
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required : [true, "PRODUCT TITLE IS REQUIRED"]
    },
    price: {
        type: Number,
        min : [0, "YOU CAN'T GIVE THINGS AWAY!"]
    },
    description: {
        type: String,
        required : [true, "DESCRIPTION IS REQUIRED"]
    } 
}, {timestamps: true})

//register schema
const Product = mongoose.model("Product", ProductSchema)

//export
module.exports = Product