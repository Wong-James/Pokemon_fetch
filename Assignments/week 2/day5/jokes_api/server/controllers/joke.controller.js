const Joke = require("../models/joke.model")
//CRUD logic goes into here

//Get all jokes in database
module.exports.findAllJokes = (req, res) => {
    Joke.find(req.Joke)
        .then(allJokes => res.json({allJokes}))
        .catch(err => res.json({err}))
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(oneJoke => res.json({oneJoke}))
        .catch(err => res.json({err}))
}

//Create
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({newJoke}))
        .catch(err => res.json({err})) 
}

//Update
module.exports.editJoke = (req, res) => {
    Joke.updateOne({_id: req.params.id}, {$set:{setup: req.body.setup, punchline: req.body.punchline}})
        .then(Joke => res.json({Joke}))
        .catch(err => res.json({err}))
}

//Delete
module.exports.deleteJoke = (req, res) => {
    Joke.remove({_id: req.params.id})
        .then(Joke => res.json({Joke}))
        .catch(err => res.json({err}))

}