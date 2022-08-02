import { Link } from 'react-router-dom'
import { Nav, Navbar, Container, Form, Button, InputGroup } from 'react-bootstrap'
import { useState } from 'react'
import { FaSistrix } from 'react-icons/fa'

const NavBar = ({ user, search, setSearch }) => {

    const handleSearch = (event) => {
        console.log(event.target.value)
        setSearch(event.target.value)
    }


    const padding = {
        padding: 5
    }


    // console.log('search navbar.js', search)

    // variant="tabs"

    return (
        <Navbar collapseOnSelect expand="lg" className="header-container">
            <Container>

                <Navbar.Brand>
                    <Nav.Link href="#" as="span" style={{ border: 'none' }} >
                        <Link className="nav-link" style={{ textDecoration: 'none' }} to="/">
                            Shopping Spree
                        </Link>
                    </Nav.Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">

                        <Nav.Link href="#" as="span" style={{ border: 'none' }}>
                            <Link className="nav-link" style={{ textDecoration: 'none' }} to="/users">
                                Users
                            </Link>
                        </Nav.Link>

                        <Nav.Link href='#' as="span" style={{ border: 'none' }}>
                            <Link className="nav-link" style={{ textDecoration: 'none' }} to="/cart">
                                Cart
                            </Link>
                        </Nav.Link>

                        <Nav.Link href="#" as="span" style={{ border: 'none' }}>
                            {user
                                ? <em style={padding}>{user.name} logged in</em>
                                : <Link className="nav-link" style={{ textDecoration: 'none' }} to="/login">
                                    Login
                                </Link>
                            }
                        </Nav.Link>

                        <Nav.Link href="#" as="span" style={{ border: 'none' }}>
                            <Link className="nav-link" style={{ textDecoration: 'none' }} to="/logout">
                                Logout
                            </Link>
                        </Nav.Link>
                    </Nav>

                    <Form>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type="search"
                                value={search}
                                onChange={handleSearch} />
                            <Button variant="outline-secondary" id="button-addon2">
                                <FaSistrix color="red" size={12} />
                            </Button>
                        </InputGroup>
                    </Form>
                    


                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavBar

// variant="outline-success"