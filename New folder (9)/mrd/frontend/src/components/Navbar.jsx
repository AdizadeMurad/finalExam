import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
function Navbar() {
  return (
<>
<nav>
   <div className='general-navbar'>
   <div>
        <img className='img-logo' src="	https://preview.colorlib.com/theme/shop/img/logo.png" alt="" />
    </div>
    <ul>
        <Link to={'/'}><li>Home</li></Link>
        <Link to={'/Add'}><li>Add</li></Link>
        <Link to={'/Basket'}><li>Basket</li></Link>
        <Link to={'Admin'}><li>Admin</li></Link>
        <Link><li></li></Link>
    </ul>
   </div>
</nav>
</>  )
}

export default Navbar