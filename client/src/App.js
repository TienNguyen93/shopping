import {useState, useEffect} from 'react'
import axios from 'axios'
import {FaSearch} from "react-icons/fa";

import './App.css'
import Product from './components/Product'

const App = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products`)
      .then(response => {
        console.log('fake api here', response.data)
        setProducts(response.data)
      })
  }, [])

  const getSearch = (event) => {
    event.preventDefault()
    setQuery(search)
    setSearch('')
  }

  const handleSearch = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  return (
    <div className="App">
      <div className="header-container">
            <h1 style={{padding: '10px'}}>Shopping Spree</h1>
            <form className="search-form" onSubmit={getSearch}>
                <div>
                  <FaSearch />
                  <input type="text" value={search} onChange={handleSearch}/>
                </div>
            </form>
      </div>


      <div className="body">
        <h2>Products</h2>
        <div className="products">
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
      
      
      
    </div>
    
  )
}

export default App;


/*
const getProducts = async () => {
    const response = await 
      axios
        .get(
          `http://localhost:5000/foods/${query}`
        )
        console.log(response.data)
        setProducts(response.data)
  }

  useEffect(() => {
    getProducts()
  }, [query])

  {
        "id": 2,
        "content": "Browser can execute only JavaScript",
        "date": "2022-1-17T18:39:34.091Z",
        "important": false
      },
      {
        "id": 3,
        "content": "GET and POST are the most important methods of HTTP protocol",
        "date": "2022-1-17T19:20:14.298Z",
        "important": true
      },
      {
        "id": 4,
        "content": "GET and POST are the most important methods of HTTP protocol",
        "date": "2022-1-17T19:20:14.298Z",
        "important": true
      }

*/

