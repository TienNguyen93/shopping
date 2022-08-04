import { useState, useEffect, useContext } from 'react'
import {
  BrowserRouter as Router,
  Routes, Route, Link, Navigate, useMatch
} from 'react-router-dom'
import { Alert } from 'react-bootstrap'

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
import NavBar from './components/NavBar';

import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';


const App = () => {
  const [products, setProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [search, setSearch] = useState("")
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



  const handleLogout = async (event) => {
    event.preventDefault()
    console.log('user log out')
    window.localStorage.removeItem('loggedNoteappUser')
    setUser(null)
  }


  const Profile = () => (
    <div>
      <h2>{user.name}</h2>
      <ul>
        <li>Fake info1</li>
        <li>Fake info2</li>
      </ul>
    </div>
  )


  const Logout = ({ handleLogout }) => (
    <button type="submit" onClick={handleLogout}>
      Logout
    </button>
  )


  const handleSetUser = (user) => {
    console.log('handle set user')
    setUser(user)
  }


  const match = useMatch('/products/:id')
  const product = match
    ? allProducts.find(p => p.id === String(match.params.id))
    : null


  // console.log('search app.js', search)


  return (
    <div>
      <NavBar
        user={user}
        allProducts={allProducts}
        search={search}
        setSearch={setSearch}
      />

      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<HomeScreen search={search} />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/products/:id" element={<Product product={product} />} />
          <Route path="/profile" element={user ? <Profile /> : <Navigate replace to="/login" />} />
          <Route path="/login" element={<LoginForm handleSetUser={handleSetUser} />} />
          <Route path="/logout" element={<Logout handleLogout={handleLogout} />} />
        </Routes>
      </div>




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
    </div>

  )
}

export default App;

