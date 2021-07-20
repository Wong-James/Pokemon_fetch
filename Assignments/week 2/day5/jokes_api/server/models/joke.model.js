const mongoose = require("mongoose")

//Defines the schema
const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String,
}, {timestamps: true})

//register the schema
const Joke = mongoose.model("Joke", JokeSchema)

//export schema to use later
module.exports = Joke