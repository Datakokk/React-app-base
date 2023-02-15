
import { FormEvent, FormEventHandler } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {

    const { name, email, password, password2, formData, onChange, onResetForm, isValidEmail} = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const onSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log(formData)
    }

  return (
    <div>
        <h1>Register Page</h1>
        <form noValidate onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Name"  
                name='name'
                value={ name }
                onChange={ onChange }
                className={ `${name.trim().length <= 0 && 'has-error' }`}
            />
            { name.trim().length <= 0 && <span>This field is mandatory</span>}

            <input 
                type="email"
                placeholder="Email"  
                name='email'  
                value={ email }
                onChange={ onChange }
                className={`${!isValidEmail(email) && 'has-error' }`}
            />
            { !isValidEmail(email) && <span>This email isn't correct!</span>}

            <input 
                type="password"
                placeholder="Password"    
                name='password'
                value={ password }
                onChange={ onChange }
            />
            { password.trim().length <= 0 && <span>This field is mandatory</span>}
            { password.trim().length > 0 && password.trim().length < 6 && <span>Password must have at least 6 characters</span>}
            
            <input 
                type="password"
                placeholder="Repeat  Password"  
                name='password2'  
                value={ password2 }
                onChange={ onChange }
            />
            { password.trim().length <= 0 && <span>This field is mandatory</span>}
            { password.trim().length > 0 && password !== password2 && <span>Passwords must have be the same</span>}

            <button type="submit">Create</button>
            <button type="button" onClick={ onResetForm }>Reset</button>
        </form>
    </div>
  )
}
