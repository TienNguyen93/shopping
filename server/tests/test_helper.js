const Product = require('../models/product')
const User = require('../models/user')

const initialProducts = [
    {
      title: 'product1',
      price: '100',
      category: 'sandal',
      image: 'https://m.media-amazon.com/images/I/61gPQz-B62L._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      title: 'product2',
      price: '99',
      category: 'stationary',
      image: 'https://m.media-amazon.com/images/I/41qmVmEjPTL._AC_SY328_.jpg'
    },
]


const nonExistingId = async () => {
    const product = new Product (
        {
            title: 'willremovethissoon',
            price:  '456',
            category: 'not available',
            image: 'https://m.media-amazon.com/images/I/51ZocvHtMZL._AC_SY328_.jpg'
        }
    )

    await product.save()
    await product.remove()

    return product._id.toString()
}



const productsInDb = async () => {
    const products = await Product.find({})
    return products.map(product => product.toJSON())
}


const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
}


module.exports = {
    initialProducts, nonExistingId, productsInDb, usersInDb
}
  