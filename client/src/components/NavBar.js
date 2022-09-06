import { Link } from 'react-router-dom'
import { Nav, Navbar, Container, Form, Button, InputGroup } from 'react-bootstrap'
// import { useState } from 'react'
import { BsSearch, BsCart } from 'react-icons/bs'
import CartBtn from './CartBtn'

// import { useSelector } from 'react-redux'

const NavBar = ({ user, search, setSearch, allProducts, setProducts }) => {
  // const state = useSelector(state => state.handleCart)


  const handleSearch = (event) => {
    setSearch(event.target.value)
    if (search !== '') {
      const newList = allProducts.filter(prod => {
        return Object.values(prod)
          .join(' ')
          .toLowerCase()
          .includes(search.toLowerCase())
      })
      setProducts(newList)
    } else {
      setProducts(allProducts)
    }
  }

  // const navLinkStyle = {
  //   padding: '0.5rem 1rem',
  //   color: 'red',
  //   textDecoration: 'none'
  // }


  return (
    <Navbar collapseOnSelect expand="lg" className="header-container" >
      <Container fluid>

        <Navbar.Brand>
          <Link className="nav-link" style={{ display: 'inline' }} to="/">
                        Shopping Spree
          </Link>

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">

            <Form style={{ alignSelf: 'center' }}>
              <InputGroup>
                <Form.Control
                  type="search"
                  value={search}
                  onChange={handleSearch} />
                <Button type="submit" variant="outline-success">
                  <BsSearch color="black" size={18} />
                </Button>
              </InputGroup>
            </Form>


            <Nav.Link href='#' as="span" style={{ border: 'none' }}>
              <Link className="nav-link" style={{ display: 'inline' }} to="/cart">
                <span>
                  <BsCart size={30} />
                </span>
              </Link>
            </Nav.Link>

            <CartBtn />


            <Nav.Link href="#" as="span" style={{ border: 'none' }}>
              {user
                ?
                <Link className="nav-link" style={{ display: 'inline' }} to="/profile">
                  {user.name} logged in
                </Link>
                : <Link className="nav-link" style={{ display: 'inline' }} to="/login">
                                    Login
                </Link>
              }
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default NavBar
