const mongoose = require("mongoose")


//Define the schema
const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
}, {timestamps: true})

//register schema
const Product = mongoose.model("Product", ProductSchema)

//export
module.exports = Product