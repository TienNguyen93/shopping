import { Link } from 'react-router-dom'

const NavBar = ({user}) => {
    const padding = {
        padding: 5
    }

    return (
        <div className="header-container">
            <ul>
                <Link style={{padding, textDecoration: 'none'}} to="/"> 
                    <h1 style={{padding: '10px', color: 'black' }}>
                        Shopping Spree
                    </h1>
                </Link>
                
                <Link style={padding} to="/cart">Cart</Link>
                <Link style={padding} to="/users">users</Link>
                {user
                    ? <em>{user.name} logged in</em>
                    : <Link style={padding} to="/login">Login</Link>
                }
                <Link style={padding} to="/logout">Logout</Link>
            </ul>
        </div>
    )
}

export default NavBar
