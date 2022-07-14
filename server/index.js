const app = require('./app') // the actual Express application
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})







// require('dotenv').config()
// const express = require('express')
// const app = express()
// const cors = require('cors')
// const logger = require('./utils/logger')
// const Product = require('./models/product')


// const requestLogger = (request, response, next) => {
//   console.log('Method:', request.method)
//   console.log('Path:  ', request.path)
//   console.log('Body:  ', request.body)
//   console.log('---')
//   next()
// }

// app.use(cors())
// app.use(express.json())
// app.use(express.static('build'))
// app.use(requestLogger)

















// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: 'unknown endpoint' })
// }

// // handler of requests with unknown endpoint
// app.use(unknownEndpoint)


// // error handling center
// const errorHandler = (error, request, response, next) => {
//   console.error(error.message)

//   if (error.name === 'CastError') {
//     return response.status(400).send({ error: 'malformatted id' })
//   } else if (error.name === 'ValidationError') {
//     return response.status(400).json({ error: error.message })
//   }

//   next(error)
// }

// // handler of requests with result to errors
// app.use(errorHandler)

// const PORT = process.env.PORT
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })





