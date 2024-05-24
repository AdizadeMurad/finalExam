import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"

function Navbar() {
  return (
<>
<nav>
    <ul className='general'>
    <li><Link to={'/'} >Home</Link></li>
    <li><Link to={'/Detail'}>Detail</Link></li>
    <li><Link to={'/AdminPanel'}>AdminPanel</Link></li>
    <li><Link to={'/Uptade/:id'}>Uptade</Link></li>
    <li><Link to={'/Add'}>Add</Link></li>
    <li><Link to={'/Basket'}>Basket</Link></li>
    </ul>
</nav>
</>
  )
}

export default Navbar