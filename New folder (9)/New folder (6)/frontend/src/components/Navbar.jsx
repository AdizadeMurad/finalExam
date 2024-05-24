import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
  <>
  <nav>
   <div className='container'>
   <div className='general'>
   <div>
        <img src="https://preview.colorlib.com/theme/florist/img/logo.png.webp" alt="" />
    </div>
    <ul>
        <Link to={'/'}><li>HOME</li></Link>
        <Link to={'/Admin'}><li>ADMIN</li></Link>
        <Link to={'/Add'}><li>ADD</li></Link>
        <Link to={'/Data'}><li>DATA</li></Link>
        <li>PAGES</li>
        <li>BLOG</li>
        <li>CONTACT</li>
    </ul>
    <div className='icontop'>
    <i class="fa-solid fa-magnifying-glass"></i>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-bag-shopping"></i>
    </div>

   </div>
   </div>
  </nav>
  </>
  )
}

export default Navbar