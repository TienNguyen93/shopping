import React from 'react'
import { Button } from 'react-bootstrap'

const UserScreen = ({ handleLogout }) => {
  return (
    <div>
      <h4>User Screen here</h4>
      <Button type="submit" onClick={handleLogout}>
                Logout
      </Button>

    </div>

  )
}

export default UserScreen