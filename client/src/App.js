import {useState, useEffect} from 'react'
import axios from 'axios'
import {FaSearch} from "react-icons/fa";
import './App.css'

import Products from './components/Products';
import Search from './components/Search';
import FilterPanel from './components/FilterPanel';
import Notification from './components/Notification';
import productService from './service/service';

const App = () => {
  const [products, setProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [search, setSearch] = useState("")
  const [categories, setCategories] = useState([
    { id: 1, checked: false, label: 'Dumbbell' },
    { id: 2, checked: false, label: 'Electronics' },
    { id: 3, checked: false, label: 'Kitchen Dining' },
    { id: 4, checked: false, label: 'Pots and Pans Set' },
    { id: 5, checked: false, label: 'Tea Kettle' },
  ])
  const [message, setMessage] = useState(null)
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 


  useEffect(() => {
    productService
      .getAll()
      .then(initialProducts => {
        setAllProducts(initialProducts)
      })
  }, [])
  
  const handleSearch = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  const handleChecked = (id) => {
    console.log('check is clicked') 
    const initialCat = categories
    const changeCat = initialCat.map(category => 
      category.id === id ? {...category, checked: !category.checked} : category
    )
    
    setCategories(changeCat)
  }


  // apply filter on data
  useEffect(() => {
    let result = allProducts

    // Search function
    if (search) {
      result = result.filter(product => product.title.toLowerCase().includes(search))
    } 

    // Category filter
    const categoryChecked = categories
      .filter(category => category.checked)
      .map(category => category.label.toLowerCase())

    if (categoryChecked.length) {
      result = result
        .filter(item => categoryChecked.includes(item.category.toLowerCase()))
    }

    setProducts(result)

  }, [allProducts, search, categories])


  const handleLogin = (event) => {
    event.preventDefault()
    console.log('login with', username, password)
  }

  return (
    <div className="App">
      <div className="header-container">
            <h1 style={{padding: '10px'}}>Shopping Spree</h1>

            <div className="search-form">
              <Search value={search} onChange={handleSearch}/>
            </div>

            <form onSubmit={handleLogin}>
              <div>
                username
                <input
                  type="text"
                  value={username}
                  name="Username"
                  onChange={({ target }) => setUsername(target.value)}
                  />
              </div>
              <div>
                password
                <input 
                  type="password"
                  value={password}
                  name="Password"
                  onChange={({ target }) => setPassword(target.value)}/>
              </div>
              <button type="submit">login</button>
            </form>
      </div>


      <div className="body">
        <div style={{display: 'flex', flex: '1'}}>
          <div style={{flexBasis: '280px'}}>
            <h2>Category</h2>
            <FilterPanel categories={categories} onChange={handleChecked}/>
            <Notification message={message}/>
          </div>
          <div style={{flex: '1'}}>
            <h2>Products</h2>
            <section className="products">
              
              <Products products={products}/>
            </section>
          </div>
        </div>
      </div>

    </div>
    
  )
}

export default App;


