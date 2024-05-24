import React, { useContext } from 'react'
import MainProvider from '../context/MainProvider'

function Basket() {

    const { basket, RemoveBasket } = useContext(MainProvider)

    return (
        <>
            <div className='cards'>
                {
                    basket.map((x) => {
                        return <>

                            <div className='card'>
                                <img src={x.image} alt="" />
                                <h2>{x.text}</h2>
                                <p>{x.price}</p>
                                <button onClick={() => RemoveBasket(x)}>Remove</button>
                            </div>

                        </>
                    })
                }   </div>

        </>
    )
}

export default Basket