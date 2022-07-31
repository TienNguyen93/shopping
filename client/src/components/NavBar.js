import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

const NavBar = ({ user }) => {
    const padding = {
        padding: 5
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#" as="span">
                        <Link style={{padding, textDecoration: 'none'}} to="/">
                            <h1 style={{ padding: '10px' }}>
                                Shopping Spree
                            </h1>
                        </Link>
                    </Nav.Link>
                    <Nav.Link href="#" as="span">
                        <Link style={padding} to="/users">users</Link>
                    </Nav.Link>
                    {/* <Nav.Link href="#" as="span">
                        {user
                            ? <em style={padding}>{user} logged in</em>
                            : <Link style={padding} to="/login">login</Link>
                        }
                    </Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar >

        // <div className="header-container">
        //     <ul>
        //         <Link style={{padding, textDecoration: 'none'}} to="/"> 
        //             <h1 style={{padding: '10px', color: 'black' }}>
        //                 Shopping Spree
        //             </h1>
        //         </Link>

        //         <Link style={padding} to="/cart">Cart</Link>
        //         <Link style={padding} to="/users">users</Link>
        //         {user
        //             ? <em>{user.name} logged in</em>
        //             : <Link style={padding} to="/login">Login</Link>
        //         }
        //         <Link style={padding} to="/logout">Logout</Link>
        //     </ul>
        // </div>
    )
}

export default NavBar
