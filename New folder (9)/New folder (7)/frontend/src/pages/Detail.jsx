import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    const { id } = useParams()
    const [mydata, setmydata] = useState([])

    useEffect(() => {
        dataByid()
    }, [])

    async function getAlldata() {
        const res = await fetch('http://localhost:3000/products/' + id)
        const data = await res.json()
        return data
    }


    async function dataByid() {
        const datalar = await getAlldata(id)
        setmydata(datalar)
    }

    return (

        <>
            <div className='cards'>
               
                            <div className='card'>
                                <img className='img' src={mydata.image} alt="" />
                                <h2>{mydata.text}</h2>
                                <p>{mydata.price}</p>
                            </div>
                        

            </div>

        </>)
}

export default Detail