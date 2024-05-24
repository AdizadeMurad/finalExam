import React from 'react'
import { useState, useEffect } from 'react'
import './Admin.scss'
import { Link } from 'react-router-dom'
function Admin() {
    useEffect(() => {
        getAlldata()
    }, [])



    const [mydata, setmydata] = useState([])
    async function getAlldata() {
        const res = await fetch('http://localhost:3000/products')
        const data = await res.json()
        setmydata(data)
    }

    async function handleDelete() {
        const res = await fetch('http://localhost:3000/products/' + id, {
            method: 'delete'
        })
        const data = await res.json()
        getAlldata()
    }


    return (

        <>
            <h2>HTML Table</h2>
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
                                <button ><Link to={`/Uptade/${x._id}`}>Edit</Link></button>
                                <button><Link to={`/Detail/${x._id}`}>Detail</Link></button>
                                <button onClick={() => handleDelete(x._id)}>Delete</button>
                            </td>
                        </tr>
                    </>


                })
            }
        </>
    )
}

export default Admin