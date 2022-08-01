import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

const NavBar = ({ user }) => {
    const padding = {
        padding: 5
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="yellow" variant='light' className="header-container">

            <div className="container-fluid">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Navbar.Brand>
                            <Nav.Link href="#" as="span">
                                <Link style={{ padding, textDecoration: 'none' }} to="/">
                                    Shopping Spree
                                </Link>
                            </Nav.Link>
                        </Navbar.Brand>
                        
                        <Nav.Link href="#" as="span">
                            <Link style={{ padding, textDecoration: 'none' }} to="/users">users</Link>
                        </Nav.Link>

                        <Nav.Link href='#' as="span">
                            <Link style={{ padding, textDecoration: 'none' }} to="/cart">Cart</Link>
                        </Nav.Link>

                        <Nav.Link href="#" as="span">
                            {user
                                ? <em style={padding}>{user.name} logged in</em>
                                : <Link style={{ padding, textDecoration: 'none' }} to="/login">login</Link>
                            }
                        </Nav.Link>

                        <Nav.Link href="#" as="span">
                            <Link style={{ padding, textDecoration: 'none' }} to="/logout">Logout</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>

        </Navbar >

        // <div className="header-container">
        // </div>
    )
}

export default NavBar
