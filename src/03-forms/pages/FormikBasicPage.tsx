import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = ( {firstName, lastName, email}: FormValues) => {

        const errors: FormikErrors<FormValues> = {};

        if( !firstName ){
            errors.firstName='First Name is required';
        }else if( firstName.length >= 15 ){
            errors.firstName='Must be 15 characters or less';
        };

        if( !lastName ){
            errors.lastName='Last Name is required';
        }else if( lastName.length >= 10 ){
            errors.lastName='Must be 10 character or less';
        };

        if (!email) {
            errors.email = 'Email is required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        };

        return errors;
    };

    const { handleBlur, handleChange, handleSubmit, values, touched,errors } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: ( values ) => {
            console.log(values)
        },
        validate
    });

  return (
    <div>
        <h1>Formik Basic Tutorial</h1>

        <form onSubmit={ handleSubmit } noValidate>
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text"
                name='firstName'
                value={ values.firstName}
                onBlur={ handleBlur }
                onChange={ handleChange }
                />  
            { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

            <label htmlFor="lastName">Last Name</label>
            <input 
                type="text"
                name='lastName'
                value={ values.lastName}
                onBlur={ handleBlur }
                onChange={ handleChange }
                />
            { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

            <label htmlFor="email">Email Address</label>
            <input 
                type="email"
                name='email'
                value={ values.email}
                onBlur={ handleBlur }
                onChange={ handleChange }
            />  
            { touched.email && errors.email && <span>{ errors.email }</span>}

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
