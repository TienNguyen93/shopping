import React from "react";
import { FaStar } from 'react-icons/fa'
import { Card, Image, Button, Container, Row, Col, Dropdown, ListGroup, DropdownButton }
    from 'react-bootstrap'

import { useState } from "react";


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

    const unit = [...Array(10).keys()]

    // const [units, setUnits] = useState(unit[0] + 1)

    // console.log('quant', units)

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

                            <div style={{paddingBottom: '1rem'}}>
                                <Button style={{...style.button, backgroundColor: 'red'}}>
                                    <label style={{ paddingRight: '5px' }}>Qty:</label>
                                    <select>
                                        {unit.map(u => (
                                            <option key={u}>{u + 1}</option>
                                        ))}
                                    </select>
                                </Button>

                            </div>


                            {/* <Dropdown style={{ marginBottom: '1rem' }}>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ borderRadius: '15px' }}>
                                    Qty: {units}
                                </Dropdown.Toggle>
                                
                                <Dropdown.Menu style={{maxHeight: '200px', overflowY: 'auto'}}>
                                {unit.map(data => (
                                        <Dropdown.Item key={data}>{data + 1}</Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown> */}

                            <div>
                                <Button style={style.button}>
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

