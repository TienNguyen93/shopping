import React from "react";

const Product = ({product}) => {
    const style = {
        product: {
            borderRadius: "10px",
            boxShadow: '0px 5px 20px #F4AAB9',
            margin: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            background: "ivory",
            alignItems: "center",
            minWidth: "40%" 
        },
    
        image: {
            borderRadius: "50%",
            width: "300px",
            height: "300px"
        }
    }

    return (
        <div style={style.product}>
            <img style={style.image} src={product.image} alt="" />
            <h2>{product.label}</h2>
            <h2>{product.category}</h2>
        </div>
    )
}

export default Product

