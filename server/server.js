const express = require('express')
const cors = require('cors')
const axios = require('axios')
const dotenv = require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())

app.get('/foods/:ingredient', async (request, response) => {
    const product = await axios.get(
        `https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&ingr=${request.params.ingredient}&nutrition-type=cooking`   
    )
    
    console.log(product.data.hints)
    response.json(product.data.hints)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})