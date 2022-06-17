import React from "react";
import Product from "./Product";

const Products = ({products}) => {
    return (
        <ul>
            {/* {products.map(product => (
                <Product 
                key={product.foodId}
                product={product}/>
                )}
            ) */}
            {products.map(product => (
                <li>
                    <Product key={product.label} product={product} />
                </li>
            ))}
        </ul>
    )
}

export default Products