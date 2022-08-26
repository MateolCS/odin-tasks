import React from 'react'
import Button from './Button'
import Form from './Form'
import { useState } from 'react'
const Header = ({onAdd}) => {

  const [showForm, setShowForm] = useState(false)

  const displayForm = () =>{
    setShowForm(!showForm)
  }

  return (
    <header className='header'>
      <div className='header__top'>
        <h1 className='header__title'>Task app</h1>
        <Button text='Add task' clickAction={displayForm}/>
      </div>
      {showForm && <Form onAdd={onAdd} clickEvent={displayForm}/>}
    </header>
  )
}

export default Header
