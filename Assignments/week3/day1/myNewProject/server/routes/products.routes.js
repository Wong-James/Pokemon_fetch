const ProductController = require("../controllers/products.controllers")

module.exports = app => {
    app.post("/api/product", ProductController.createProduct)
    app.get("/api/product/display", ProductController.findAllProducts)
    app.get("/api/product/:id", ProductController.findOneProduct)
    app.put("/api/product/:id", ProductController.updateProduct)
    app.delete("/api/product/:id", ProductController.deleteProduct)
}