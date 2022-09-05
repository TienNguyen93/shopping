import React from "react";
import { FaStar } from 'react-icons/fa'
import { Card, Image, Button, Container, Row, Col }
    from 'react-bootstrap'

import { useDispatch } from 'react-redux';
import { addCart } from '../redux/actions'

const Product = ({ product }) => {
    const disptach = useDispatch()
    const addProduct = product => {
      disptach(addCart(product))
    }


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
        },

        dropdown: {
            backgroundColor: 'beige',
            borderRadius: '15px',
            border: 'none',
            color: 'black'
        }
    }

    const unit = [...Array(10).keys()]

    return (
        <Container style={{ padding: '20px' }}>
            <Row style={{ alignItems: 'flex-start', gap: '1rem' }}>
                <Col>
                    <Image fluid src={product?.image} />
                </Col>

                <Col sm={4}>
                    <Card.Title>{product?.title}</Card.Title>
                    <Card.Text>
                        {[...Array(5)].map((star, index) => {
                            return (
                                <FaStar key={index} style={{ marginRight: '5px' }} color="red" size={12} />
                            )
                        })}

                    </Card.Text>
                    <Card.Text style={{ fontSize: 'larger', fontWeight: 'bold' }}>
                        ${product?.price}
                    </Card.Text>
                </Col>

                <Col sm={4}>
                    <Card style={{ overflow: 'inherit' }}>
                        <Card.Body>
                            <Card.Text>
                                Status: In Stock
                            </Card.Text>

                            <div style={{ paddingBottom: '1rem' }}>
                                <Button style={style.dropdown}>
                                    <label>Qty:</label>
                                    <select style={{ border: 'none' }}>
                                        {unit.map(u => (
                                            <option key={u} value={u}>{u + 1}</option>
                                        ))}
                                    </select>
                                </Button>
                            </div>

                            <div>
                                <Button style={style.button} onClick={() => addProduct(product)}>
                                    Add to Cart
                                </Button>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default Product

