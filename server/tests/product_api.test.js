const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Product = require('../models/product')


const initialProducts = [
  {
    title: 'product1',
    price: '100',
    category: 'electronic',
    image: ''
  },
  
]

test('products are returned as json', async () => {
  await api
    .get('/api/products')
    .expect(200)
    .expect('Content-Type', /application\/json/)
}, 100000)


test('there are 18 products', async () => {
    const response = await api.get('/api/products')
  
    expect(response.body).toHaveLength(18)
})


test('the first product is about pots & pan set', async () => {
    const response = await api.get('/api/products')
  
    expect(response.body[0].price).toBe('72.47')
})

afterAll(() => {
  mongoose.connection.close()
})
