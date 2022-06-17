import {useState, useEffect} from 'react'
import axios from 'axios'
import {FaSearch} from "react-icons/fa";

import './App.css'
import Product from './components/Product'

const App = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  // const getProducts = async () => {
  //   const response = await 
  //     axios
  //       .get(
  //         `http://localhost:5000/foods/${query}`
  //       )
  //       console.log(response.data)
  //       setProducts(response.data)
  // }

  // useEffect(() => {
  //   getProducts()
  // }, [query])


  const getSearch = (event) => {
    event.preventDefault()
    setQuery(search)
    setSearch('')
  }

  const handleSearch = (event) => {
    // console.log(event.target.value)
    setSearch(event.target.value)
  }

  const svg = {
    position: 'absolute',
    top: '50%',
    left: '0%',
    transform: 'translate(100%, -50%)',
    color: 'red'
  }

  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Shopping Spree</h1>

      {/* <form className="search-form" onSubmit={getSearch}>
        <div className="search-inputs">
          <input className="search-bar" type="text" value={search} onChange={handleSearch}/>
          <div className="search-icon">
          <FaSearch />
          </div>
        </div>
      </form> */}
      <form className="search-form">
        <div>
          <FaSearch />
          <input type="text"/>
        </div>
      </form>
      
      <h2>Products</h2>
      {/* <div className="products">
        {products.map(product => (
          <Product key={product.food.label} product={product.food} />
        ))}
      </div> */}
      
    </div>
    
  )
}

export default App;
