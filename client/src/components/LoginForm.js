import React from "react";
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password
}) => {

  // const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <h2>Login</h2>

      {/* <form onSubmit={handleSubmit}> */}
      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  // handleSubmit: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default LoginForm