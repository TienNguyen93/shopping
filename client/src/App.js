import {useState, useEffect} from 'react'
import axios from 'axios'
import {FaSearch} from "react-icons/fa";

import './App.css'
import Products from './components/Products';
import Search from './components/Search';
import FilterPanel from './components/FilterPanel';

const App = () => {
  const [products, setProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [search, setSearch] = useState("")
  const [resultFound, setResultFound] = useState(false)

  const [categories, setCategories] = useState([
    {
      id: 1, 
      checked: false,
      label: 'Dumbbell'
    },
    {
      id: 2, 
      checked: false,
      label: 'Electronics'
    },
    {
      id: 3, 
      checked: false,
      label: 'Kitchen Dining'
    },
    {
      id: 4, 
      checked: false,
      label: 'Pots and Pans Set'
    },
    {
      id: 5, 
      checked: false,
      label: 'Tea Kettle'
    },
  ])

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products`)
      .then(response => {
        console.log('fake api here', response.data)
        setAllProducts(response.data)
      })
  }, [])

  // const searchFunction = (products) => {
  //   return products.filter(product => product.title.toLowerCase().includes(search))
  // }
  
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
    console.log('handlecheck here', changeCat)
  }

  const applyFilter = (products) => {
    const updatedList = allProducts

    console.log('updated list', updatedList)

    
    return updatedList
    // setProducts(updatedList)
    // const categoryChecked = categories
    //   .filter(category => category.checked)
    //   .map(category => category.label.toLowerCase())

    // console.log('category checked', categoryChecked) 

    // if (categoryChecked.length) {
    //   updatedList = updatedList.filter(item => categoryChecked.includes(item.category))
    // }
    // setProducts(updatedList)

    // !updatedList.length ? setResultFound(false) : setResultFound(true)
  }

  // useEffect(() => {
  //   applyFilter()
  // }, [categories] )

  return (
    <div className="App">
      <div className="header-container">
            <h1 style={{padding: '10px'}}>Shopping Spree</h1>
            <div className="search-form">
              <FaSearch />
              <Search value={search} onChange={handleSearch}/>
            </div>
      </div>


      <div className="body">
        <div style={{display: 'flex', flex: '1'}}>
          <div style={{backgroundColor: 'orange', flexBasis: '280px', borderRight: 'solid 2px'}}>
            <h2>Category</h2>
            <FilterPanel categories={categories} onChange={handleChecked}/>
          </div>
          <div style={{flex: '1'}}>
            <h2>Products</h2>
            <section className="products">
              {/* <Products products={searchFunction(allProducts)}/> */}
              <Products products={applyFilter(allProducts)}/>
            </section>
          </div>
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

