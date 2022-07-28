import { useState, useEffect } from 'react'
import { 
  BrowserRouter as Router, 
  Routes, Route, Link
} from 'react-router-dom'

import './App.css'

import Products from './components/Products';
import Search from './components/Search';
import FilterPanel from './components/FilterPanel';
import Notification from './components/Notification';
import productService from './services/service';
import loginService from './services/login'
import LoginForm from './components/LoginForm';
import Togglable from './components/Togglable';
import Product from './components/Product';

import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';

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
  const [user, setUser] = useState(null)


  useEffect(() => {
    productService
      .getAll()
      .then(initialProducts => {
        setAllProducts(initialProducts)
      })
  }, [])


  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])


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


  const handleLogin = async (event) => {
    event.preventDefault()
    
    try {
      const user = await loginService.login({
        username, password
      })

      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )

      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setMessage('wrong credentials')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }


  const handleLogout = async (event) => {
    event.preventDefault()
    console.log('user log out')
    window.localStorage.removeItem('loggedNoteappUser')
    setUser(null)
  }


  // const handleSearch = (event) => {
  //   console.log(event.target.value)
  //   setSearch(event.target.value)
  // }


  const handleChecked = (id) => {
    console.log('check is clicked')
    const initialCat = categories
    const changeCat = initialCat.map(category =>
      category.id === id ? { ...category, checked: !category.checked } : category
    )

    setCategories(changeCat)
  }

  // const loginForm = () => (
  //   <Togglable buttonLabel='login'>
  //     <LoginForm 
  //       username={username}
  //       password={password}
  //       handleUsernameChange={({ target }) => setUsername(target.value)}
  //       handlePasswordChange={({ target }) => setPassword(target.value)}
  //       handleSubmit={handleLogin}/>
  //   </Togglable>
  // )

  const padding = {
    padding: 5
  }

  return (
    <Router>
      
      <div>
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/cart">cart</Link>
        <Link style={padding}to="/products/:id">product</Link>
        <Link style={padding}to="/products">product</Link>
      </div>
                                                                                                                                                                                                                                                                                                                                                                                                                             
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/products/:id" element={<Product product={products} />} />
        <Route path="/products" element={<Products products={products} />}/>
      </Routes>


      {/* <div className="App">
      <div className="header-container">
        <h1 style={{ padding: '10px' }}>Shopping Spree</h1>

        <div className="search-form">
          <Search value={search} onChange={handleSearch} />
        </div>

        {user === null ?
          <Togglable buttonLabel='login'>
            <LoginForm
              username={username}
              password={password}
              handleUsernameChange={({ target }) => setUsername(target.value)}
              handlePasswordChange={({ target }) => setPassword(target.value)}
              handleSubmit={handleLogin}
            />
          </Togglable> :
          
          <div>
            <p>{user.name} logged in</p>
          </div>
        }

        <button type="submit" onClick={handleLogout}>
          logout
        </button>

        <Notification message={message} />

      </div>


      <div className="body">
        <div style={{ display: 'flex', flex: '1' }}>
          <div style={{ flexBasis: '280px' }}>
            <h2>Category</h2>
            <FilterPanel categories={categories} onChange={handleChecked} />
            <Notification message={message} />
          </div>
          <div style={{ flex: '1' }}>
            <h2>Products</h2>
            <section className="products">

              <Products products={products} />
            </section>
          </div>
        </div>
      </div>

      </div> */}
    </Router>

  )
}

export default App;

