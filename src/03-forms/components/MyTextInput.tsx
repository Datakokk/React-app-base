import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name:  string;
    type?: 'text' | 'email' | 'password'| 'select';
    placeholder?: string;
    [x: string]: any;
}

export const MyTextInput = ({label, ...props}: Props) => {

    const [ field ] = useField(props);
    
  return (
    <>
        <label htmlFor={ props.id || props.name}>{ label }</label>
        <input {...props} {...field}/>
        <ErrorMessage name={ props.name } component="span" />
    </>
  )
}
