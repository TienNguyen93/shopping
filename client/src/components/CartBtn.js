import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { BsCart } from 'react-icons/bs'

const CartBtn = () => {
  // we get a state of addItem
  const state = useSelector(state => state.addItems)
  return (
    <>
      <Link to="/cart">
        <span>
          <BsCart size={30} />
        </span> Cart ({state.length})
      </Link>
    </>
  )
}

export default CartBtn
