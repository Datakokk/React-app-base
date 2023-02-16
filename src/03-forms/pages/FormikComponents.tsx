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
                email: '',
                jobType: '',
                terms: false
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
                            .email('e-post må være en gyldig e-post'),
                jobType: YUP.string()
                            .required('Nødvendig')            
                            .notOneOf(['it-jr'], 'Dette alternativet er ikke tillatt'),
                terms: YUP.boolean()
                            .oneOf([true], 'Du må godta betingelsene')
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
                        <ErrorMessage name="email" component="span" />

                        <label htmlFor="jobType">Job Type</label>
                        <Field name="jobType" as="select">
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Jr.</option>
                        </Field>
                        <ErrorMessage name="jobType" component="span" />

                        <label>
                            <Field name="terms" type="checkbox"/>  
                            Terms and conditions
                        </label>
                        <ErrorMessage name="terms" component="span" />

                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}
