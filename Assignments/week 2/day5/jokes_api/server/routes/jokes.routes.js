const JokeController = require("../controllers/joke.controller")

module.exports = app => {
    app.get("/api/jokes", JokeController.findAllJokes)
    app.get("/api/jokes/:id", JokeController.findOneJoke)
    app.post("/api/jokes/new", JokeController.createJoke)
    app.put("/api/jokes/:id", JokeController.editJoke)
    app.delete("/api/jokes/:id", JokeController.deleteJoke)
}