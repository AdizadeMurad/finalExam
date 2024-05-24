import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import './Admin.scss'
import { Link } from 'react-router-dom'
import MainProvider, { MainContext } from '../context/MainProvider'
function Admin() {
    const [mydata, setmydata] = useState([])
    const { IncreaseItem } = useContext(MainContext)
    useEffect(() => {
        getAlldata()
    }, [])

    async function getAlldata() {
        const res = await fetch('http://localhost:3000/products')
        const data = await res.json()
        setmydata(data)
    }

    async function handleDelete(id) {
        const res = await fetch('http://localhost:3000/products/' + id, {
            method: 'delete'
        })
        const data = res.json()
        getAlldata()
    }

function sortAz(params) {
   return  mydata.toSorted((a,b) => (a[params] > b[params]) ? 1 : ((b[params] > a[params]) ? -1 : 0))
}

function sortZa(params) {
    return  mydata.toSorted((a,b) => (a[params] < b[params]) ? 1 : ((b[params] < a[params]) ? -1 : 0))
 }
 
    return (
        <>


            <h2>HTML Table</h2>

            <table>



                {
                    mydata.map((x) => {
                        return <>
                            <tr>
                                <th>Image</th>
                                <th>Text</th>
                                <th>Price</th>
                                <th>Crud</th>
                            </tr>
                            <tr>
                                <td><img className='img' src={x.image} alt="" /></td>
                                <td>{x.text}</td>
                                <td>{x.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(x._id)}>Delete</button>
                                    <button onClick={() => IncreaseItem(x)} >Add Basket</button>
                                  <button><Link to={`/Uptade/${x._id}`}>Uptade</Link></button>
                                  <button><Link to={`/Detail/${x._id}`}>Detail</Link></button>
                                  
                                </td>
                            </tr>

                        </>
                    })
                }</table>
        </>
    )
}

export default Admin