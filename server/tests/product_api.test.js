const mongoose = require('mongoose')
const supertest = require('supertest')
const bcrypt = require('bcrypt')

const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)

const Product = require('../models/product')
const User = require('../models/user')


beforeEach(async () => {
  await Product.deleteMany({})
  await Product.insertMany(helper.initialProducts)
})


// Block 1 
describe('when there is initially some products saved', () => {
  test('products are returned as json', async () => {
    await api
      .get('/api/products')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })


  // test GET method to get all the products
  test('all products are returned', async () => {
    const response = await api.get('/api/products')

    expect(response.body).toHaveLength(helper.initialProducts.length)
  })


  // test for the product is actually in the DB
  test('a specific product is within the returned products', async () => {
    const response = await api.get('/api/products')

    const contents = response.body.map(r => r.title)
    expect(contents).toContain(
      'product2'
    )  
  })

})


// Block 2
describe('viewing a specific note', () => {
  // test for fetching individual note
  test('succeeds with a valid id', async () => {
    const productsAtStart = await helper.productsInDb()

    const productToView = productsAtStart[0]

    const resultProduct = await api 
      .get(`/api/products/${productToView.id}`) 
      .expect(200)
      .expect('Content-Type', /application\/json/)

    /* since exercise use Date object, JSON serializations helps convert it to string 
      (from the lesson exercise) 
        const processedProductToView = JSON.parse(JSON.stringify(productToView))
        expect(resultProduct.body).toEqual(processedProductToView)
    */

    expect(resultProduct.body).toEqual(productToView)
  })


  test('fails with statuscode 404 if product not exist', async () => {
    const validNonexistingId = await helper.nonExistingId()

    console.log(validNonexistingId)

    await api
      .get(`/api/products/${validNonexistingId}`)
      .expect(404)
  })


  test('fails with statuscode 400 id is invalid', async () => {
    const invalidId = '5a3d5da59070081a82a3445'

    await api
      .get(`/api/products/${invalidId}`)
      .expect(400)
  })

})



// Block 3
describe('addition of a new product', () => {

  // test for adding a valid product
  test('succeeds with valid data', async () => {
    const newProduct = {
      title: 'newly added product',
      price: '123',
      category: 'whatever',
      image: 'https://m.media-amazon.com/images/I/41z0bs+VePL._AC_SY164_.jpg'
    }

    await api
      .post('/api/products')
      .send(newProduct)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const productsAtEnd = await helper.productsInDb()
    expect(productsAtEnd).toHaveLength(helper.initialProducts.length + 1)

    const contents = productsAtEnd.map(r => r.title)
    expect(contents).toContain('newly added product')
  })

  // test for adding a product with missing title can't be proceed
  test('fails with status code 400 if data invaild', async () => {
    const newProduct = {
      price: '123',
      category: 'whatever',
      image: 'https://m.media-amazon.com/images/I/41z0bs+VePL._AC_SY164_.jpg'
    }

    await api
      .post('/api/products')
      .send(newProduct)
      .expect(400)

    const notesAtEnd = await helper.productsInDb()

    expect(notesAtEnd).toHaveLength(helper.initialProducts.length)
  })

})



// Block 4
describe('deletion of a product', () => {
  // test for removing a single product
  test('succeeds with status code 204 if id is valid', async () => {
    const productsAtStart = await helper.productsInDb()
    const productToDelete = productsAtStart[0]

    await api 
      .delete(`/api/products/${productToDelete.id}`)
      .expect(204)

    const productsAtEnd = await helper.productsInDb()

    expect(productsAtEnd.length).toEqual(helper.initialProducts.length - 1)

    const titles = productsAtEnd.map(r => r.title)

    expect(titles).not.toContain(productToDelete.title)
  })
})



                /****************Tests for User ****************/
describe('when there is initally one user in db', () => {
  beforeEach(async () => {
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', passwordHash })

    await user.save()
  })


  test('creation succeeds with a fresh username', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      password: 'salainen',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()

    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)
  })


  test('creation fails with proper statuscode and message if username already taken', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'root',
      name: 'Superuser',
      password: 'salainen',
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('username must be unique')

    const usersAtEnd = await helper.usersInDb()
    
    expect(usersAtEnd).toEqual(usersAtStart)
  })
  
})

afterAll(() => {
  mongoose.connection.close()
})
