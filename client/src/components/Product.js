import React from "react";
import { FaStar } from 'react-icons/fa'
import { Card } from 'react-bootstrap'



const Product = ({ product }) => {
    const style = {
        product: {
            verticalAlign: 'top',
            textAlign: 'left',
            overFlow: 'hidden',
            minHeight: '100%',
            display: 'inline-block',
            whiteSpace: 'normal',
            letterSpacing: 'normal',
            listStyleType: 'none'
        },

        image: {
            maxWidth: "230px",
            maxHeight: "230px",
            alignSelf: 'center'
        }
    }

    console.log('product product.js', typeof(product), product)

    // let {
    //     title: title, 
    //     category: category, 
    //     image: image, 
    //     price: price
    // } = product
    
    // console.log('title here', title)

    return (
        <div className="row">
            henlo
            
            {/* <div className="col">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.image} alt=""/>
                </Card>
            </div>

            <div className="col">
                <Card.Title>{product.title}</Card.Title>
            </div> */}
        </div>

        // <div style={style.product}>
        //     <div style={{textAlign: 'center'}}>
        //         <img style={style.image} src={product.image} alt="" />
        //     </div>
        //     <div style={{padding: '10px', textAlign: 'left', lineHeight: '25px'}}>
        //         <ul style={{listStyleType: 'none'}}>
        //             <li>{product.title}</li>
        //             <div>
        //             {[...Array(5)].map((star, index) => {        
        //                 return (           
        //                 <FaStar key={index} style={{marginRight: '5px'}} color="red" size={12}/>   
        //                 );
        //             })}
        //             </div>

        //             <li style={{fontSize: '18px', paddingTop: '5px'}}>
        //                 ${product.price}
        //             </li>
        //         </ul>
        //     </div>
        // </div>
    )
}

export default Product

