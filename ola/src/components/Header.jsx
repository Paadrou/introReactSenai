import React, { useState } from 'react'
import './Header.css'

function Header(){
  const[searchTerm, setSearchTerm] = useState('')


    return (
      <div className='Header'>
        <h1>Buscador de personagens - Harry Potter</h1>

        <input className='search' type="text" placeholder='Digite o nome ai zé' value={searchTerm} onChange={((e) => setSearchTerm(e.target.value))} />
      </div>
    )
  }
export default Header