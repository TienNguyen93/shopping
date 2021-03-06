import React from "react";
import {FaStar} from 'react-icons/fa'
import { useParams } from 'react-router-dom'


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
            maxWidth: "230px",
            maxHeight: "230px",
            alignSelf: 'center'
        }
    }

    const id = useParams().id
    // console.log('id here', id)

    const prod = product.find(n => n.id === String(id))

    return (
        <div style={style.product}>
            <div style={{textAlign: 'center'}}>
                <img style={style.image} src={prod.image} alt="" />
            </div>
            <div style={{padding: '10px', textAlign: 'left', lineHeight: '25px'}}>
                <ul style={{listStyleType: 'none'}}>
                    <li>{prod.title}</li>
                    <div>
                    {[...Array(5)].map((star, index) => {        
                        return (           
                        <FaStar key={index} style={{marginRight: '5px'}} color="red" size={12}/>   
                        );
                    })}
                    </div>
            
                    <li style={{fontSize: '18px', paddingTop: '5px'}}>
                        ${prod.price}
                    </li>
                </ul>
            </div>
        </div>
        
        
    )
}

export default Product



// <li>{product.rating.rate}</li>
//  'Trebuchet MS', sans-serif