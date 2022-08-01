import { Link } from 'react-router-dom'
import { Nav, Navbar, Container, Form } from 'react-bootstrap'
import { useEffect, useState } from 'react'

import Search from './Search'

const NavBar = ({ user, allProducts }) => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const [categories, setCategories] = useState([
        { id: 1, checked: false, label: 'Dumbbell' },
        { id: 2, checked: false, label: 'Electronics' },
        { id: 3, checked: false, label: 'Kitchen Dining' },
        { id: 4, checked: false, label: 'Pots and Pans Set' },
        { id: 5, checked: false, label: 'Tea Kettle' },
    ])


    // // apply filter on data
    // useEffect(() => {
    //     let result = allProducts

    //     // Search function
    //     if (search) {
    //         result = result.filter(product => product.title.toLowerCase().includes(search))
    //     }

    //     // Category filter
    //     const categoryChecked = categories
    //         .filter(category => category.checked)
    //         .map(category => category.label.toLowerCase())

    //     if (categoryChecked.length) {
    //         result = result
    //             .filter(item => categoryChecked.includes(item.category.toLowerCase()))
    //     }

    //     setProducts(result)

    // }, [allProducts, search, categories])



    const handleSearch = (event) => {
        console.log(event.target.value)
        setSearch(event.target.value)
    }


    const padding = {
        padding: 5
    }


    return (
        <Navbar collapseOnSelect expand="lg" className="header-container" variant="tabs">
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

                        {/* <div className="search-form">
                            <Search value={search} onChange={handleSearch} />
                        </div> */}

                        <Form>
                            <Form.Control
                                type="search"
                                value={search}
                                onChange={handleSearch} />
                        </Form>


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
