import React from 'react'
import Button from './Button'
import Form from './Form'
const Header = () => {
  return (
    <header className='header'>
      <div className='header__top'>
        <h1 className='header__title'>Task app</h1>
        <Button text='Add task'/>
      </div>
      <Form/>
    </header>
  )
}

export default Header
