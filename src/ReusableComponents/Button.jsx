import React from 'react'

const Button = ({btnText,className, func}) => {
  return (
    <button onClick={func} className={`px-3 py-1 bg-[#3563E9] text-white rounded-[4px] ${className}`}>{btnText}</button>
  )
}

export default Button