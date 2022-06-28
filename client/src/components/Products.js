import React from "react";
import Product from "./Product";

const Products = ({products, allProducts}) => {
    // if (products.length !== 0) {
    //     return (
    //         <>
    //             {products.map(product => 
    //                 <Product key={product.id} product={product}/>)}
    //         </>
    //     )
    // }
    // else {
    //     return (
    //         <>
    //             {allProducts.map(product => 
    //                 <Product key={product.id} product={product}/>)}
    //         </>
    //     )
    // }
    return (
        <>
            {products.map(product => 
                <Product key={product.id} product={product}/>)}
        </>
    )
}

export default Products