import React from "react";
import {FaStar} from 'react-icons/fa'

const Product = ({product}) => {
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
            // borderRadius: "10px",
            // margin: "10px",
            // display: "flex",
            // flexDirection: "column",
            // justifyContent: "space-evenly",
            // alignItems: "center",
            // minWidth: "20%",
        },
    
        image: {
            width: "150px",
            height: "170px",
            alignSelf: 'center'
        }
    }

    return (
        <div style={style.product}>
            <img style={style.image} src={product.image} alt="" />
            <div style={{padding: '10px', alignSelf: 'flex-start', lineHeight: '25px'}}>
                <ul style={{listStyleType: 'none'}}>
                    <li>{product.title}</li>
                    <div>
                    {[...Array(5)].map((star) => {        
                        return (           
                        <FaStar style={{marginRight: '5px'}} color="red" size={12}/>   
                        );
                    })}
                    </div>
            
                    <li style={{fontSize: '18px', paddingTop: '5px'}}>
                        ${product.price}
                    </li>
                </ul>
            </div>
        </div>

        // <div style={{height: '274px'}}>
        // <ul style={{margin: '0',listStyleType: 'none', height: '100%', whiteSpace: 'nowrap', overflowX: 'visible', color: '#0f1111', letterSpacing: '-4px'}}>
        //     <li className="card" style={{width: '160px', marginLeft: '23px'}}>
        //         <img src={product.image} alt="" />
        //         <div>{product.title}</div>
        //         <div>{product.price}</div>
        //     </li>
        // </ul>
        // </div>
    )
}

export default Product



// <li>{product.rating.rate}</li>
//  'Trebuchet MS', sans-serif