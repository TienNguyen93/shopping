import React from 'react'
import { Alert } from 'react-bootstrap'

const Notification = ({ message }) => {
  return (
    (message &&
            <Alert variant="success">
              {message}
            </Alert>
    )
  )

  // if (message === null) {
  //     return null
  // }

  // return (
  //     {(message &&
  //         <Alert variant="success">
  //   {message}
  // </Alert>)}
  // )
}

export default Notification