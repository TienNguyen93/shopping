import React from "react";
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import loginService from '../services/login'


/* initial code */
// const LoginForm = ({ handleSubmit, handleUsernameChange,
//   handlePasswordChange, username, password }) => {

//   return (
//     <div>
//       <h2>Login</h2>

//       <form onSubmit={handleSubmit}>
//         <div>
//           username
//           <input
//             value={username}
//             onChange={handleUsernameChange}
//           />
//         </div>
//         <div>
//           password
//           <input
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <button type="submit">login</button>
//       </form>
//     </div>
//   )
// }







//////////////////////////////////////////////////////////////
const LoginForm = ({handleSetUser}) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [user, setUser] = useState(null)


  const navigate = useNavigate()


  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password
      })

      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )

      // setUser(user)
      handleSetUser(user)
      setUsername('')
      setPassword('')
      navigate('/')
    } catch (exception) {
      setMessage('wrong credentials')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

// LoginForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
//   handleUsernameChange: PropTypes.func.isRequired,
//   handlePasswordChange: PropTypes.func.isRequired,
//   username: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired
// }

export default LoginForm