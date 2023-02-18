import { Form, Formik } from 'formik';
import * as YUP from 'yup';

import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';

const initialValues: {[key:string]: any } = {};
const requiredFields: {[key:string]: any} = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  
  if( !input.validations ) continue;

  let schema = YUP.string();

  for (const rule of input.validations) {
      if(rule.type === 'required'){
        schema = schema.required('This field is mandatory');
      };

      if(rule.type === 'minLength'){
        schema = schema.min( (rule as any).value || 2 ,`Minimum ${(rule as any).value || 2} characters`);
      };

      if(rule.type === 'email'){
        schema = schema.email('Email must be a valid email');
      };
  };

  requiredFields[input.name] = schema;
};

const validationSchema = YUP.object({ ...requiredFields})

export const DynamicForm = () => {

  return (
    <div>
        <h1>Dynamic Form</h1>

        <Formik 
          initialValues={ initialValues } 
          onSubmit={(values) => {
            console.log(values)
          }}
          validationSchema={ validationSchema }
        >
          {
            ( formik ) => (
              <>
                <Form noValidate >
                  {
                    formJson.map(({ type, label, name, placeholder, options }) => {

                      if( type === 'input' || type === 'password' || type === 'email') {
                        
                        return <MyTextInput 
                          key={ name }
                          label={ label } 
                          name={ name } 
                          type={ type as any }
                          placeholder={ placeholder }
                        />

                      }else if (type === 'select' ){

                        return <MySelect 
                          key={ name } 
                          label={ label } 
                          name={ name } 
                        >
                          <option value="">Select an option</option>
                          {
                            options?.map( ({id, label }) => (
                              <option key={ id } value={ id }>{ label }</option>
                            ))
                          }
                        </MySelect>
                      }

                    })
                  }
                  <button type="submit">Submit</button>
                </Form>
              </>
            )
          }
        </Formik>
    </div>
  )
}
