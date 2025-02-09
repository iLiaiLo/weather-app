import React from 'react'

const Input = ({search,handleChange,weatherSearch}) => {
  return (
    <input type="text" className="weatherInput" placeholder="enter city name" value={search}
     onChange={handleChange} onKeyDownCapture={weatherSearch}  />
  )
}

export default Input