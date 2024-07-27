import React from 'react'

const Button = ({btnText,className}) => {
  return (
    <button className={`px-3 py-1 bg-[#3563E9] text-white ${className}`}>{btnText}</button>
  )
}

export default Button