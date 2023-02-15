import { ChangeEvent, useState } from "react";

export const useForm = <T>( initState: T) => {
  
    const [formData, setFormData] = useState( initState );

    const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

    const onResetForm = () => {
        setFormData({ ...initState } )
    };

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
  
    return {
        ...formData,
        formData,

        isValidEmail,
        onChange,
        onResetForm,
    }
}
