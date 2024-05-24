import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import  { MainContext } from '../context/MainProvider'
function Navbar() {
    const { basket } = useContext(MainContext)
    return (
        <nav>
            <ul>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/Add'}><li>Add</li></Link>
                <Link to={'/Basket'}><li>Basket---{basket.length}</li></Link>
                <Link to={'/Admin'}><li>Admin</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar