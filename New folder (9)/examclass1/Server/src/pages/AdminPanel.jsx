import React from 'react'
import "./AdminPanel.scss"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function AdminPanel() {
    const [mydata, setmydata] = useState([])

    async function getAllproduct() {
        const res = await fetch('http://localhost:3000/products')
        const data = await res.json()
        setmydata(data)
    }

    useEffect(() => {
        getAllproduct()
    }, [])


    async function handleDelete(id) {
        const res = await fetch('http://localhost:3000/products/'+id,{
            method:'delete'
        })
        const data = await res.json()
        return getAllproduct()
    }

    return (
        <>
            <h2>Admin Panel</h2>
            {mydata.map((x) => {
                return <>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Age</th>
                            <th>Crud</th>
                        </tr>
                        <tr>
                            <td>{x.name}</td>
                            <td>{x.surname}</td>
                            <td>{x.age}</td>
                            <td>
                                <button><Link to={'/Add'}>Add</Link></button>
                                <button onClick={()=>handleDelete(x._id)}><Link>Delete</Link></button>
                                <button><Link to={`/Uptade/${x._id}`}>Edit</Link></button>
                            </td>
                        </tr>
                    </table>
                </>
            })}

        </>
    )
}

export default AdminPanel