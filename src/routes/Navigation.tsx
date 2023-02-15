import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";

import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage";
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
                        <NavLink to="/lazy3" className={({ isActive } )=> isActive ? 'nav-active' : '' }>Users</NavLink>
                    </li>
                </ul>
            </nav>
        
            <Routes>
                <Route path="/register" element={<RegisterPage />}/>
                <Route path="formik-basic" element={<FormikBasicPage />}/>
                <Route path="lazy3" element={<h1>Users</h1>}/>

                <Route path="/" element={<Navigate to="/lazy3" replace />}/>
            </Routes>
        </div>

    </BrowserRouter>
  )
}
