const productsRouter = require('express').Router()
const Product = require('../models/product')

// get all resources
productsRouter.get('/', (request, response) => {
  Product.find({}).then(products => {
    response.json(products)
  })
})


// fetch single resource
productsRouter.get('/:id', (request, response, next) => {
  Product.findById(request.params.id)
    .then(product => {
      if (product) {
        response.json(product)
      } else {
        response.status(404).end()
      }
  })
  // pass error forward with 'next' function
  // if next called w/o parameter, execution move onto next route | middleware
  // else, execution continue to error handler middleware
  .catch(error => next(error))
})


// Add resource
productsRouter.post('/', (request, response, next) => {
  const body = request.body

  const product = new Product({
    title: body.title,
    image: body.image,
    price: body.price,
    category: body.category,
  })

  product.save()
    .then(savedProduct => {
      response.json(savedProduct)
    })
    .catch(error => next(error))
  
})


// delete resource
productsRouter.delete('/:id', (request, response, next) => {
  Product.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})


// update product
productsRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const product = {
    title: body.title,
    price: body.price,
    category: body.category,
    image: body.image
  }

  Product.findByIdAndUpdate(
    request.params.id, product, { new: true }
  )
    .then(updatedProduct => {
      response.json(updatedProduct)
    })
    .catch(error => next(error))
})

module.exports = productsRouter