const express = require('express');
const app = express()
const port = 8000

require("./server/config/mongoose.config")

//configure express server
app.use(express.json())
app.use(express.urlencoded({ extended: true }) )

const jokeRoutes = require("./server/routes/jokes.routes")
jokeRoutes(app)  

app.listen(port, () => console.log(`Listening on port: ${port}`));