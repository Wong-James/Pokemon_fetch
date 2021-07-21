const ProductController = require("../controllers/products.controllers")

module.exports = app => {
    app.post("/", ProductController.createProduct)
    app.get("/", ProductController.findAllProducts)
}