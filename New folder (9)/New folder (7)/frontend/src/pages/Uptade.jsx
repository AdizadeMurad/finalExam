import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
function Uptade() {
    const {id} = useParams()
    const [mydata, setmydata] = useState(null)

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

       {
        mydata &&      <Formik
        initialValues={{ image: mydata.image, text: mydata.text, price: mydata.price }}
        validationSchema={Yup.object({
            image: Yup.string()
                .required('Required'),
            text: Yup.string()
                .required('Required'),
            price: Yup.number()
                .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                fetch('http://localhost:3000/products/' + id, {
                    method: 'put',
                    headers: {
                        "Content-Type": "application/json",
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    }, body: JSON.stringify({ image: values.image, text: values.text, price: values.price })
                })
                setSubmitting(false);
            }, 400);
        }}
    >
        <Form>
            <label htmlFor="image">image</label>
            <Field name="image" type="text" />
            <ErrorMessage name="image" />

            <label htmlFor="text">text</label>
            <Field name="text" type="text" />
            <ErrorMessage name="text" />

            <label htmlFor="price">price</label>
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