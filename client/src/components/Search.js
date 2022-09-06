import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = ({ value, onChange }) => {
  return (
    <>
      <FaSearch />
      <input value={value} onChange={onChange}/>
    </>

  )
}

export default Search