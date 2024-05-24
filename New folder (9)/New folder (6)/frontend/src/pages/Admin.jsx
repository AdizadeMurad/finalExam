import React from 'react'
import './Add.scss'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function Admin() {
    
    const [mydata, setmydata] = useState([])
    useEffect(() => {
        getAlldata()
    }, [])

    async function getAlldata() {
        const res = await fetch('http://localhost:3000/products')
        const data = await res.json();
        setmydata(data)
    }
    async function handleDelete(id) {
        const res = await fetch('http://localhost:3000/products/'+ id, {
            method: 'delete'
        })
        const data = await res.json()
        getAlldata()
    }

    return (
        <>
            <table>
                {console.log(mydata)}
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
                                <td><img src={x.image} alt="" /></td>
                                <td>{x.text}</td>
                                <td>{x.price}</td>
                                <td>
                         
                                    <button onClick={() => handleDelete(x._id)}>Delete</button>
                                    <button ><Link to={`/Uptade/${x._id}`}>Uptade</Link></button>
                                    <button ><Link to={`/Detail/${x._id}`}>Detail</Link></button>
                                </td>
                            </tr>
                        </>
                    })
                }
            </table>
        </>
    )
}

export default Admin