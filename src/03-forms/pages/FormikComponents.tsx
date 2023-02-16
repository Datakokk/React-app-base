import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as YUP from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {

  return (
    <div>
        <h1>Formik Components</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: ''
            }}
            onSubmit={( values ) => {
                console.log(values)
            }}
            validationSchema={YUP.object({
                firstName: YUP.string()
                                .max(15, 'Må være på 15 tegn')
                                .required('Nødvendig'),
                lastName: YUP.string()
                                .max(10, 'Må være på 10 tegn')
                                .required('Nødvendig'),
                email: YUP.string()
                            .required('Nødvendig')
                            .email('e-post må være en gyldig e-post')
            })}
        >

            { (formik) => (
                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="text"/>  
                        <ErrorMessage name="firstName" component={'span'} />  
                        
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="text"/>  
                        <ErrorMessage name="lastName" component={'span'} />

                        <label htmlFor="email">Email Address</label>
                        <Field name="email" type="email"/>  
                        <ErrorMessage name="email" component={'span'} />

                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}
