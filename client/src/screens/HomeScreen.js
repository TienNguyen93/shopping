import React from "react"
import { useState, useEffect, useContext } from "react"
import { Alert } from 'react-bootstrap'

import FilterPanel from "../components/FilterPanel"
import Products from "../components/Products"
import NavBar from '../components/NavBar'

import productService from '../services/service'

const HomeScreen = ({ search, allProducts, products, setProducts }) => {
    const [categories, setCategories] = useState([
        { id: 1, checked: false, label: 'Dumbbell' },
        { id: 2, checked: false, label: 'Electronics' },
        { id: 3, checked: false, label: 'Kitchen Dining' },
        { id: 4, checked: false, label: 'Pots and Pans Set' },
        { id: 5, checked: false, label: 'Tea Kettle' },
    ])

    // // apply filter on data
    // useEffect(() => {
    //     let result = allProducts

    //     // Search function
    //     if (search) {
    //         result = result.filter(product => product.title.toLowerCase().includes(search))
    //     }

    //     // Category filter
    //     const categoryChecked = categories
    //         .filter(category => category.checked)
    //         .map(category => category.label.toLowerCase())

    //     if (categoryChecked.length) {
    //         result = result
    //             .filter(item => categoryChecked.includes(item.category.toLowerCase()))
    //     }

    //     setProducts(result)

    // }, [allProducts, search, categories])


    const handleChecked = (id) => {
        console.log('check is clicked')
        const initialCat = categories
        const changeCat = initialCat.map(category =>
            category.id === id ? { ...category, checked: !category.checked } : category
        )
        setCategories(changeCat)
        console.log(changeCat)
    }


    // const boxFilterItems = (allProducts) => {
    //     const categoryChecked = categories
    //         .filter(category => category.checked)
    //         .map(category => category.label.toLowerCase())

    //     if (categoryChecked.length) {
    //         const newList = allProducts.filter(item => 
    //             categoryChecked.includes(item.category.toLowerCase()))
    //         setProducts(newList)
    //     } else {
    //         setProducts(allProducts)
    //     }
    // }


    // const filteredItems = boxFilterItems(products)

    return (
        <div>
            <div className="row">
                <h3 style={{ fontWeight: 'bold' }}>Best Sellers</h3>
                <div className="col col-lg-2">
                    <h5 style={{ fontWeight: 'bold' }}>Category</h5>
                    <FilterPanel categories={categories} onChange={handleChecked} />
                </div>

                <div className="col">
                    <section className="products">
                        <Products products={search.length < 1 ? allProducts : products} />
                    </section>
                </div>
            </div>


            <div>
                <br />
                <em>Shopping Spree, TN</em>
            </div>
        </div>
    )
}

export default HomeScreen