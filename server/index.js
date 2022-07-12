const express = require('express')
const cors = require('cors')
// const axios = require('axios')
// const { response } = require('express')
// const dotenv = require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

let products = [
    {
      id: 1,
      title: "Amazon Basics Non-Stick Cookware Set, Pots, Pans and Utensils - 15-Piece Set",
      image: "https://m.media-amazon.com/images/I/61x-NhdKBmL._AC_SX679_.jpg",
      price: "72.47",
      category: "Pots and Pans Set"
    },
    {
      id: 2,
      title: "Blue Diamond Cookware Diamond Infused Ceramic Nonstick 14 Piece Cookware Pots and Pans Set, PFAS-Free, Dishwasher Safe, Oven Safe, Blue",
      image: "https://m.media-amazon.com/images/I/81AaN8u8BQL._AC_SX679_.jpg",
      price: "129.99",
      category: "Pots and Pans Set"
    },
    {
      id: 3,
      title: "Calphalon 10-Piece Pots and Pans Set, Nonstick Kitchen Cookware with Stay-Cool Stainless Steel Handles, Black",
      image: "https://m.media-amazon.com/images/I/81jZNuVLr7L._AC_SX679_.jpg",
      price: "199.99",
      category: "Pots and Pans Set"
    },
    {
      id: 4,
      title: "Gotham Steel Pots and Pans Set 12 Piece Cookware Set with Ultra Nonstick Ceramic Coating by Chef Daniel Green, 100% PFOA Free, Stay Cool Handles, Metal Utensil & Dishwasher Safe - 2020 Edition",
      image: "https://m.media-amazon.com/images/I/718V+f-gKnL._AC_SX679_.jpg",
      price: "89.00",
      category: "Pots and Pans Set"
    },
    {
      id: 5,
      title: "DELARLO Tri-Ply Stainless Steel Sauce Pan Sauce Pot, Small Saucepan With Glass Lid , Nonstick Honeycomb Induction Saucier Pot Cookware, Dishwasher Safe & Oven Safe(1.5 Quart)",
      image: "https://m.media-amazon.com/images/I/81HFBbRe5pL._AC_SX679_.jpg",
      price: "30.99",
      category: "Kitchen Dining"
    },
    {
      id: 6,
      title: "Presto 01781 23-Quart Pressure Canner and Cooker",
      image: "https://m.media-amazon.com/images/I/81Y29kSqfhL._AC_SX679_.jpg",
      price: "159.00",
      category: "Kitchen Dining"
    },
    {
      id: 7,
      title: "Lodge L8SK3 10-1/4-Inch Pre-Seasoned Skillet",
      image: "https://m.media-amazon.com/images/I/71NwXbY+6nL._AC_SX679_.jpg",
      price: "19.90",
      category: "Kitchen Dining"
    },
    {
      id: 8,
      title: "Steamer Basket Stainless Steel Vegetable Steamer Basket Folding Steamer Insert for Veggie Fish Seafood Cooking, Expandable to Fit Various Size Pot",
      image: "https://m.media-amazon.com/images/I/71XtDvr+dYL._AC_SX679_.jpg",
      price: "10.99",
      category: "Kitchen Dining"
    },
    {
      id: 9,
      title: "Poliviar Tea Kettle, 2.7 Quart Natural Stone Finish with Wood Pattern Handle Loud Whistle Food Grade Stainless Steel Teapot, Anti-Hot Handle and Anti-Rust, Suitable for All Heat Sources (JX2018-GR20)",
      image: "https://m.media-amazon.com/images/I/71jivJr3HML._AC_SX679_.jpg",
      price: "36.99",
      category: "Tea Kettle"
    },
    {
      id: 10,
      title: "Whistling Tea Kettles, AIDEA 2.3 Quart Ceramic Tea Kettle for Stovetop Induction, Enameled Interior Tea Pot for Anti-Rust, Audible Whistling Hot Water Kettle for Kitchen - Easter Gift -Turquoise",
      image: "https://m.media-amazon.com/images/I/51XjA+zkLUL._AC_SY300_SX300_.jpg",
      price: "48.99",
      category: "Tea Kettle"
    },
    {
      id: 11,
      title: "Le Creuset Enamel On Steel Whistling Tea Kettle, 1.7 qt., Cerise",
      image: "https://images-na.ssl-images-amazon.com/images/I/41JUmwgRHjL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      price: "93.99",
      category: "Tea Kettle"
    },
    {
      id: 12,
      title: "Jucoan 2.6 Quart Vintage Enamel Tea Kettle, Green Floral Enamel on Steel Teapot with Cool Touch Porcelain Handle for Stovetop",
      image: "https://images-na.ssl-images-amazon.com/images/I/71rppSbWj1L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      price: "26.99",
      category: "Tea Kettle"
    },
    {
      id: 13,
      title: "Bose SoundLink Around Ear Wireless Headphones II - Black",
      image: "https://m.media-amazon.com/images/I/71jDdUuRi8L._AC_SY879_.jpg",
      price: "170.99",
      category: "Electronics"
    },
    {
      id: 14,
      title: "Spigen Tough Armor Designed for Samsung Galaxy S10 Plus Case (2019) - Black",
      image: "https://m.media-amazon.com/images/I/51YBPj+lS3L._AC_SX679_.jpg",
      price: "15.99",
      category: "Electronics"
    },
    {
      id: 15,
      title: "Samsung Galaxy USB-C Cable (USB-C to USB-C) - Black - US Version with Warranty",
      image: "https://m.media-amazon.com/images/I/61cdrB6Rh4L._AC_SX679_.jpg",
      price: "7.49",
      category: "Electronics"
    },
    {
      id: 16,
      title: "PopSockets PopWallet+: Swappable and Repositionable Wallet - Black Faux Leather",
      image: "https://m.media-amazon.com/images/I/51A4puRFT5L._AC_SX679_.jpg",
      price: "29.99",
      category: "Electronics"
    },
    {
      id: 17,
      title: "WF Athletic Supply Neoprene Coated Dumbbell Set with A Frame Storage Rack, Non-Slip Grip & Hexagon Shape, Space Saving Home Gym Equipment, Color Options Available",
      image: "https://m.media-amazon.com/images/I/71DeBWD+bBL._AC_SX679_.jpg",
      price: "159.99",
      category: "Dumbbell"
    },
    {
      id: 18,
      title: "Papababe Dumbbell Set Rubber Encased Hex Dumbbell Free Weights Dumbbells Set Home Weight Set",
      image: "https://m.media-amazon.com/images/I/71ZWsq8K-CL._AC_SX679_.jpg",
      price: "439.99",
      category: "Dumbbell"
    },
]

// get all resources
app.get('/api/products', (request, response) => {
    response.json(products)
})


// fetch single resource
app.get('/api/products/:id', (request, response) => {
  const id = Number(request.params.id)
  const product = products.find(product => product.id === id)

  if (product) {
    response.json(product)
  } else {
    response.status(404).end()
  }
  
})


// delete resource
app.delete('/api/products/:id', (request, response) => {
  const id = Number(request.params.id)
  products = products.filter(product => product.id !== id)
  
  response.status(204).end()
})

const generateId = () => {
  const maxId = products.length > 0 
    ? Math.max(...products.map(n => n.id))
    : 0

  return maxId + 1
}

// Add resource
app.post('/api/products', (request, response) => {
  const body = request.body

  if (!body.title) {
    return response.status(400).json({
      error: `title missing`
    })
  }

  const product = {
    title: body.title,
    image: body.image,
    price: body.price,
    category: body.category,
    id: generateId()
  }

  products = products.concat(product)

  response.json(product)
  
})


// app.put('/api/products/:id', (request, response) => {
//   const id = Number(request.params.id)
// })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
