import { FormikErrors, useFormik } from 'formik';
import * as YUP from 'yup';

import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikYupPage = () => {

   

    const { getFieldProps, handleBlur, handleChange, handleSubmit, values, touched, errors } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: ( values ) => {
            console.log(values)
        },
        validationSchema: YUP.object({
            firstName: YUP.string()
                            .max(15, 'Må være på 15 tegn')
                            .required('Nødvendig'),
            lastName: YUP.string()
                            .max(10, 'Må være på 10 tegn')
                            .required('Nødvendig'),
            email: YUP.string()
                        .required('Nødvendig')
                        .email('e-post må være en gyldig e-post')
        })
    });

  return (
    <div>
        <h1>Formik Yup</h1>

        <form onSubmit={ handleSubmit } noValidate>
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text"
                { ...getFieldProps('firstName')}
                />  
            { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

            <label htmlFor="lastName">Last Name</label>
            <input 
                type="text"
                { ...getFieldProps('lastName')}
                />
            { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

            <label htmlFor="email">Email Address</label>
            <input 
                type="email"
                { ...getFieldProps('email')}
            />  
            { touched.email && errors.email && <span>{ errors.email }</span>}

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
