import React from 'react'
import { useState,useEffect } from 'react'
import "./Home.scss"
function Home() {

    const [mydata, setmydata] = useState([])

async function getAllproduct() {
    const res = await fetch('http://localhost:3000/products')
    const data = await res.json()
    setmydata(data)
}

useEffect(() => {
getAllproduct()
}, [])




  return (
<>
<div className='cards'>
    {mydata.map((x)=>{
        return <>
        <div className='card'>
            <h2>{x.name}</h2>
            <h2>{x.surname}</h2>
            <p>{x.age}</p>
        </div>
        
        </>
    })}
</div>
</>
  )
}

export default Home