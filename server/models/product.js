/* product.js: defines Mongoose schema for products */

const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    price: {
        type: String, 
        required: true
    },
    category: {
        type: String, 
        required: true
    },
    image: {
        type: String, 
        required: true
    },
})


// transform id format from objectID to string &
// delete mongo versioning field _v 
productSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Product', productSchema)