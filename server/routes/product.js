const express = require('express')
const Router = express.Router()
const mongoose = require('mongoose')
const Product = mongoose.model('Product')

Router.get('', (req, res) => {
    Product.find({}, (err, findProducts) => {
        return res.json(findProducts)
    })
})
Router.get('/:ProductId', (req, res) => {
    const ProductId = req.params.ProductId
    Product.findById(ProductId, (err, findProduct) => {
        if (err) {
            return res.status(422).send({errors: [{title: 'Puroduct Error Not Find!', detail: err}]})
        }
        return res.json(findProduct)
    })
})
module.exports = Router