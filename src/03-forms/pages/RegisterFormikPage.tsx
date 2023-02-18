import { Form, Formik } from 'formik';
import * as YUP from 'yup';

import '../styles/styles.css';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

  return (
    <div>
        <h1>Register Formik Page</h1>

        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
                password2: '',
            }}
            onSubmit={(values) =>{
                console.log(values)
            }}
            validationSchema={YUP.object({
                name: YUP.string()
                            .min(2, 'Må være på minimum 2 tegn')
                            .max(15, 'Må være på maksimalt 15 tegn')
                            .required('Nødvendig'),
                email: YUP.string()
                            .required('Nødvendig')
                            .email('e-post må være en gyldig e-post'),
                password: YUP.string()
                            .min(6, 'Må være på minimum 6 tegn')
                            .required('Nødvendig'),
                password2: YUP.string()
                            .required('Nødvendig')
                            .oneOf([ YUP.ref('password') ], 'Passordet må være det samme'),
            })}
        >
            {
                ({ handleReset } ) => (
                    <Form>
                        <MyTextInput 
                            label="Navnet"
                            name="name" 
                         />
                        <MyTextInput 
                            label="Mail"
                            name="email" 
                            type="email"
                         />
                        <MyTextInput 
                            label="Passord"
                            name="password" 
                            type="password" 
                         />
                        <MyTextInput 
                            label="Bekrefte passord"
                            name="password2" 
                            type="password" 
                         />

                        <button type="submit">Create</button>
                        <button type="button" onClick={ handleReset }>Reset</button>
                    </Form>
                )
            }
        </Formik>
       
    </div>
  )
}
