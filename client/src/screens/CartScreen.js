import React from "react";
import { FaTrash } from 'react-icons/fa'
import { Container, Row, Col, Button, Card, Image }
    from 'react-bootstrap'

import { useSelector } from 'react-redux'

const CartScreen = ({ product }) => {
    const style = {
        button: {
            backgroundColor: 'red',
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
            <Row>
                <Col>
                    <Card style={{ padding: '10px' }}>
                        <div className="row">
                            <div className="col">
                                <h2>Shopping Cart</h2>
                            </div>

                            <div className="col" style={{ textAlign: 'end' }}>
                                <h5>Price</h5>
                            </div>
                        </div>
                        <hr style={{ height: '0.5px' }} />
                        <div className="row">
                            <Col style={{alignSelf: 'center'}}>
                                <Image fluid src="https://m.media-amazon.com/images/I/61x-NhdKBmL._AC_SX679_.jpg" />
                            </Col>

                            <Col md="8">
                                <h6>
                                    Amazon Basics Non-Stick Cookware Set, Pots, Pans and Utensils - 15-Piece Set
                                </h6>
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
                                    <Button style={style.button}>
                                        <FaTrash /> Delete
                                    </Button>
                                </div>
                            </Col>

                            <Col style={{ textAlign: 'end' }}>
                                <h5 style={{ fontWeight: 'bold' }}>$72.47</h5>
                            </Col>
                        </div>
                        <hr />
                        <div style={{ textAlign: 'end' }}>
                            <h5>Subtotal (1 item): $72.47</h5>
                        </div>
                    </Card>
                </Col>
                <></>

                <Col md="auto">
                    <Card style={{ padding: '10px', minHeight: '0'}}>
                        <div>
                            <h5>Subtotal (1 item): $72.47</h5>
                        </div>

                        <div>
                            <Button style={{...style.button, backgroundColor: '#FAD02C'}}>
                                Proceed to checkout
                            </Button>
                        </div>
                    </Card>
                </Col>

            </Row>


        </Container>
    )
}

export default CartScreen