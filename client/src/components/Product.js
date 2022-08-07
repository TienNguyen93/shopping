import React from "react";
import { FaStar } from 'react-icons/fa'
import { Card, Image, Button } from 'react-bootstrap'



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
        },

        button: {
            backgroundColor: '#FAD02C',
            color: 'black',
            borderRadius: '15px',
            paddingRight: '50px',
            paddingLeft: '50px',
            border: 'none'
        }
    }

    return (
        <div className="row" style={{padding: '20px' }}>
            <div className="col" style={{ alignSelf: 'center' }}>
                <Card border='dark'>
                    <Card.Img src={product?.image} alt="" />
                </Card>

            </div>

            <div className="col">
                <Card>
                    <Card.Body>
                        <Card.Title>{product?.title}</Card.Title>
                        <Card.Text>
                            {[...Array(5)].map((star, index) => {
                                return (
                                    <FaStar key={index} style={{ marginRight: '5px' }} color="red" size={12} />
                                )
                            })}
                        </Card.Text>
                        <Card.Text style={{fontSize: 'larger'}}>${product?.price}</Card.Text>
                        <Button style={style.button}>
                            Add to cart
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Product

