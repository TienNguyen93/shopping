import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const state = useSelector(state => state.addCart)

  let total = 0

  const itemList = item => {
    total = total + item.price
    return (
      <div>
        {item.title}
        {item.price}
      </div>
    )
  }


  return (
    <div>
    Checkout here
      <ul>
        {state.map(itemList)}
      </ul>
    </div>
  )
}

export default Checkout