import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name:  string;
    [x: string]: any;
}

export const MyCheckbox = ({label, ...props}: Props) => {

    const [ field ] = useField({...props}); // this hook have a metaData who include error, touched...

  return (
    <>
        <label>
            <input type="checkbox" {...props} {...field}/>
            { label }
        </label>
        <ErrorMessage name={ props.name } component="span" />
        {/* {
            metaData.touched && metaData.error && (
                <span>{ metaData.error }</span>
            )
        } */}
    </>
  )
}
