import { Formik, Form } from 'formik';
import * as YUP from 'yup';

import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {

  return (
    <div>
        <h1>Formik Abstraction</h1>

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
                        <MyTextInput 
                            label="First Name" 
                            name="firstName" 
                            placeholder="First Name"    
                        />

                        <MyTextInput 
                            label="Last Name" 
                            name="lastName" 
                            placeholder="Last Name"    
                        />

                        <MyTextInput 
                            label="Email Address" 
                            name="email" 
                            type="email"
                            placeholder="email"    
                        />

                        <MySelect label="Job Type" name="jobType" >
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Jr.</option>
                        </MySelect>

                        <MyCheckbox label="Terms & conditions" name="terms"/>

                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}
