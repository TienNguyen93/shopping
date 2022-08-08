import React from "react";
import { FaStar } from 'react-icons/fa'
import { Card, Image, Button, Container, Row, Col, Dropdown, ListGroup }
    from 'react-bootstrap'
import DropdownItem from "react-bootstrap/esm/DropdownItem";



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
        // <div className="row" style={{ padding: '20px' }}>
        //     <div className="col">
        //         <Card.Img src={product?.image} alt="" />
        //     </div>

        //     <div className="col-md-auto">
        //         <Card.Body>
        //             <Card.Title>{product?.title}</Card.Title>
        //             <Card.Text>
        //                 {[...Array(5)].map((star, index) => {
        //                     return (
        //                         <FaStar key={index} style={{ marginRight: '5px' }} color="red" size={12} />
        //                     )
        //                 })}
        //             </Card.Text>
        //             <Card.Text style={{ fontSize: 'larger', fontWeight: 'bold' }}>
        //                 ${product?.price}
        //             </Card.Text>
        //         </Card.Body>
        //     </div>

        //     <div className="col-xs-lg">
        //         <Card.Text>
        //             Status: In Stock
        //         </Card.Text>
        //         <div className="row">
        //             <Button style={{ borderRadius: '15px' }}>
        //                 Qty:
        //             </Button>
        //             <Button style={style.button}>
        //                 Add to Cart
        //             </Button>
        //         </div>
        //     </div>
        // </div>


        <Container style={{ padding: '20px' }}>
            <Row style={{ alignItems: 'flex-start' }}>
                {/* <Col sm={8}> */}
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
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                Status: In Stock
                            </Card.Text>

                            <Card.Text>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ borderRadius: '15px' }}>
                                        Qty:
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {[...Array(5)].map(index => {
                                            return (
                                                <Dropdown.Item eventKey={index}>mull</Dropdown.Item>
                                            )
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Card.Text>

                            <Card.Text>
                                <Button style={style.button}>
                                    Add to Cart
                                </Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default Product

