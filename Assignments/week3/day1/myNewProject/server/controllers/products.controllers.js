const Product = require("../models/products.models")


//Display
module.exports.findAllProducts = (req, res) => {
    Product.find(req.Product)
        .then(allProducts => res.json({allProducts}))
        .catch(err => res.json({err}))
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err))
}


//Create
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({newProduct}))
        .catch(err => res.status(400).json({err})) 
}

//Update
module.exports.updateProduct = (req, res) => {
    const {id} = req.params
    Product.findOneAndUpdate({_id: id}, req.body, {new:true, runValidators:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.status(400).json(err))
}

//Delete
module.exports.deleteProduct = (req, res) => {
    const {id} = req.params
    Product.deleteOne({_id: id})
        .then(confirmation => res.json(confirmation))
        .catch(err => res.json(err))
}