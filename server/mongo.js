const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://Tn1234:${password}@tn.v3g7g.mongodb.net/shoppingApp?retryWrites=true&w=majority`

const productSchema = new mongoose.Schema({
  title: String,
  price: String,
  category: String,
  image: String
})

const Product = mongoose.model('Product', productSchema)

mongoose
  .connect(url)
//   .then((result) => {
//     console.log('connected')

//     const product = new Product({
//       title: "Bentgo",
//       price: "11.50",
//       category: "Cooking",
//       image: "https://m.media-amazon.com/images/I/81APFLv5ksL._AC_SL1500_.jpg",
//     })

//     return product.save()
//   })
//   .then(() => {
//     console.log('product saved!')
//     return mongoose.connection.close()
//   })

  Product.find({}).then(result => {
    result.forEach(product => {
        console.log(product)
    })
    mongoose.connection.close()
    })
    
  .catch((err) => console.log(err))




