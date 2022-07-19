const productsRouter = require('express').Router()
const Product = require('../models/product')

// get all resources
productsRouter.get('/', async (request, response) => {
  const products = await Product.find({})
  response.json(products)
})


// fetch single resource
productsRouter.get('/:id', async (request, response) => {
    const product = await Product.findById(request.params.id)

    if (product) {
      response.json(product)
    } else {
      response.status(404).end()
    }
  
  // pass error forward with 'next' function
  // if next called w/o parameter, execution move onto next route | middleware
  // else, execution continue to error handler middleware
})


// Add resource
productsRouter.post('/', async (request, response, next) => {
  const body = request.body

  const product = new Product({
    title: body.title,
    image: body.image,
    price: body.price,
    category: body.category,
  })

  const savedProduct = await product.save()
  response.status(201).json(savedProduct)
  
})


// delete resource
productsRouter.delete('/:id', async (request, response) => {
  await Product.findByIdAndRemove(request.params.id)
  response.status(204).end()

  // eliminate try-catch w/ 'express-async-errors' library (found in app.js)
})


// update resource
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