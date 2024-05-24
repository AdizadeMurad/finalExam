import React from 'react'
import './Data.scss'
import { useState,useEffect } from 'react'
function Data() {
    const [mydata, setmydata] = useState([])
    useEffect(() => {
        getAlldata()
    }, [])

    async function getAlldata() {
        const res = await fetch('http://localhost:3000/products')
        const data = await res.json();
        setmydata(data)
    }

    function sortAz(params) {
        return mydata.toSorted((a,b) => (a[params] > b[params]) ? 1 : ((b[params] > a[params]) ? -1 : 0))
    }
    function sortZa() {
        return mydata.toSorted((a,b) => (a[params] < b[params]) ? 1 : ((b[params] < a[params]) ? -1 : 0))
    }
  return (
   <>



  <div>
    
<div>
<button onClick={()=>sortAz()}>Az</button>
<button onClick={()=>sortZa()}>Za</button>

</div>

  <div className='cards'>


{ 
 mydata.map((x)=>{
     return <>
  <div className='card'>
  <img src={x.image} alt="" />
  <p>{x.text}</p>
  <h2>{x.price}</h2>
  </div>
     </>
 })
}
</div>

  </div>
   </>
  )
}

export default Data