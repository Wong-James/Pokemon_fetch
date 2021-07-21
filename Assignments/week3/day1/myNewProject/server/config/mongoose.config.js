const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/product_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("established a connection with database"))
    .catch(err => console.log("Something went wrong when connecting tot he database"))