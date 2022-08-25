import React from 'react'
import Button from './Button'
const Header = () => {
  return (
    <header className='header'>
        <h1 className='header__title'>Task app</h1>
        <Button text='Add task'/>
    </header>
  )
}

export default Header
