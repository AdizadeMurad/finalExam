import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState,useEffect } from 'react';
function Add() {
    const [mydata, setmydata] = useState([])
    async function getAlldata() {
        const res = await fetch('http://localhost:3000/products')
        const data = await res.json()
        setmydata(data)
    }

    return (
        <Formik
            initialValues={{ image: '', text: '', price: '' }}
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
                    async function getAlldata() {
                        const res = await fetch('http://localhost:3000/products', {
                            method: 'post',
                            headers: {
                                'Accept': 'application/json, text/plain, */*',
                                'Content-Type': 'application/json'
                            }, body: JSON.stringify(values)
                        })
                        const data = await res.json()

                    }
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
    )
}

export default Add