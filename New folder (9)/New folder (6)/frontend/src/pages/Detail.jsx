import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router'

function Detail() {
    const [mydata, setmydata] = useState([])
    const {id} =useParams()
    useEffect(() => {
        datalar()
    }, [])

    async function getAlldata() {
        const res = await fetch('http://localhost:3000/products/'+id)
        const data = await res.json();
        return data
    }

    async function datalar() {
        const datalars = await getAlldata(id)
        setmydata(datalars)
    }
    return (
        <>

            <div>
                <div>
                    <img src={mydata.image} alt="" />
                    <p>{mydata.text}</p>
                    <p>{mydata.price}</p>
                </div>
            </div>

        </>
    )
}

export default Detail