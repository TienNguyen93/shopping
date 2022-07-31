import React from "react"
import { useState, useEffect } from "react"

import FilterPanel from "../components/FilterPanel"
import Products from "../components/Products"

import productService from '../services/service'

const HomeScreen = () => {
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


    useEffect(() => {
        productService
            .getAll()
            .then(initialProducts => {
                setAllProducts(initialProducts)
            })
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
    

    const handleChecked = (id) => {
        console.log('check is clicked')
        const initialCat = categories
        const changeCat = initialCat.map(category =>
            category.id === id ? { ...category, checked: !category.checked } : category
        )

        setCategories(changeCat)
    }

    return (
        <div className="App">
            <div className="body">
                <h1>Home screen here</h1>
                <div style={{ display: 'flex', flex: '1' }}>
                    <div style={{ flexBasis: '200px' }}>
                        <h2>Category</h2>
                        <FilterPanel categories={categories} onChange={handleChecked} />
                    </div>

                    <div style={{ flex: '1' }}>
                        <h2>Products</h2>
                        <section className="products">
                            <Products products={products} />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen