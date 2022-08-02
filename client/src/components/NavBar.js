import { Link } from 'react-router-dom'
import { Nav, Navbar, Container, Form } from 'react-bootstrap'
import { useEffect, useState, useContext  } from 'react'

import HomeScreen from '../screens/HomeScreen'


const NavBar = ({ user, allProducts, search, setSearch }) => {
    const [products, setProducts] = useState([])


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
                    <Nav className="me-auto">
                        {/* <Form>
                            <Form.Control
                                type="search"
                                value={search}
                                onChange={handleSearch} />
                        </Form> */}

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
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavBar
