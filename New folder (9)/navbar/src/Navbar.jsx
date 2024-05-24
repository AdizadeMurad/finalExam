import React, { useState } from 'react'
import "./Navbar.scss"

function Navbar() {
    const [isclick, setisclick] = useState(false)

    function change() {
        setisclick(!isclick)
    }


    return (
        <>
            <nav className='drop'>
                <button className='btn' onClick={change}>elmin</button>
                {isclick && <ul className=''>
                    <li>aaaaa</li> 
                    <li>bbbbb</li>
                    <li>ccccc</li>
                    <li>ddddd</li>
                </ul>}

            </nav>
        </>
    )
}

export default Navbar