const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
//   author: ObjectId,
    name: {type: String, required: true, max: [60, '60 length']},
    price: Number,
    description: String,
    coverImage: String,
    heading: String,
})
module.exports = mongoose.model('Product', ProductSchema);