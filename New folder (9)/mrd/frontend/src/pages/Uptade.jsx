import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
function Uptade() {
    const [mydata, setmydata] = useState(null)

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
         {
            mydata &&    <Formik
            initialValues={{ image: mydata.image, text: mydata.mydata, price: mydata.price }}
            validationSchema={Yup.object({
                image: Yup.string()
                    .required('Required'),
                text: Yup.string()
                    .required('Required'),
                price: Yup.number()
                    .required('Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    fetch('http://localhost:3000/products/' + id, {
                        method: 'put',
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'application/json'
                        }, body: JSON.stringify({ image: values.image, text: values.text, price: values.price })
                    })
                    getAlldata()
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form>
                <label htmlFor="image">First Name</label>
                <Field name="image" type="text" />
                <ErrorMessage name="image" />

                <label htmlFor="text">Last Name</label>
                <Field name="text" type="text" />
                <ErrorMessage name="text" />

                <label htmlFor="price">price Address</label>
                <Field name="price" type="text" />
                <ErrorMessage name="price" />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
         }
        </>
    )
}

export default Uptade