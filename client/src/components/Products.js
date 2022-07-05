import React from "react";
import Product from "./Product";

// const Products = ({products, allProducts}) => {
//     if (products.length) {
//         return (
//             <>
//                 {products.map(product => 
//                     <Product key={product.id} product={product}/>)}
//             </>
//         )
//     } else {
//         return (
//             <>
//                 {allProducts.map(product => 
//                     <Product key={product.id} product={product}/>)}
//             </>
//         )
//     }
    
// }


const Products = ({products}) => {
    return (
        <>
            {products.map(product => 
                <Product key={product.id} product={product}/>)}
        </>
    )
}

export default Products