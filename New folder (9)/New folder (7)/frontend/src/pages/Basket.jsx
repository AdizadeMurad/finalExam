import React, { useContext } from 'react'
import { MainContext } from '../context/MainProvider'

function Basket() {
    const { basket } = useContext(MainContext)

  return (
<>
<div className='cards'>
    {basket.map((x)=>{
        return <>
        <div className='card'>
            <img src={x.image} alt="" />
            <h2>{x.text}</h2>
            <p>{x.price}</p>
        </div>
        </>
    })}

</div>
</>
  )
}

export default Basket