import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
function Detail() {

    const [mydata, setmydata] = useState([])

    useEffect(() => {
        getById()
    }, [])

const {id} = useParams()


    async function getAlldata() {
        const res = await fetch('http://localhost:3000/products/' + id)
        const data = await res.json()
        return data
    }

    async function getById() {
        const datalar = await getAlldata(id)
        setmydata(datalar)
    }


  return (
<>
<div className='cards'>
    <div className='card'>
<img className='img' src={mydata.image} alt="" />
<h3>{mydata.text}</h3>
<p>{mydata.price}</p>
    </div>
</div>
</>
    )
}

export default Detail