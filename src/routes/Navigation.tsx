import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";

import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage";
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
import { FormikComponents } from "../03-forms/pages/FormikComponents";
import { RegisterPage } from "../03-forms/pages/RegisterPage";

import logo from  '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={ logo } alt="React logo" />
                <ul>
                    <li>
                        <NavLink to="/register" className={({ isActive } )=> isActive ? 'nav-active' : '' }>Register Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-basic" className={({ isActive } )=> isActive ? 'nav-active' : '' }>Formik Basic Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-yup" className={({ isActive } )=> isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-components" className={({ isActive } )=> isActive ? 'nav-active' : '' }>Formik Components</NavLink>
                    </li>
                </ul>
            </nav>
        
            <Routes>
                <Route path="/register" element={<RegisterPage />}/>
                <Route path="formik-basic" element={<FormikBasicPage />}/>
                <Route path="formik-yup" element={<FormikYupPage />}/>
                <Route path="formik-components" element={<FormikComponents />}/>

                <Route path="/" element={<Navigate to="/lazy3" replace />}/>
            </Routes>
        </div>

    </BrowserRouter>
  )
}
