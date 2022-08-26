import React from 'react'

const Button = ({text, clickAction}) =>{

  return (
    <button className='button' onClick={clickAction}>
      {text}
    </button>
  )
}

export default Button
