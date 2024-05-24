import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function Add() {
  return (
   <>
        <Formik
       initialValues={{ image: '', text: '', price: '' }}
       validationSchema={Yup.object({
         image: Yup.string()
           .required('Required'),
         text: Yup.string()
           .required('Required'),
           price: Yup.string()
           .required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
        async function AddProduct() {
            const res = await fetch('http://localhost:3000/products', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  }, body: JSON.stringify(values)
            })
            const data = await res.json()
        }
        AddProduct()
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="image">Image</label>
         <Field name="image" type="text" />
         <ErrorMessage name="image" />
 
         <label htmlFor="text">Text</label>
         <Field name="text" type="text" />
         <ErrorMessage name="text" />
 
         <label htmlFor="price">Price</label>
         <Field name="price" type="text" />
         <ErrorMessage name="price" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
   </>
  )
}

export default Add