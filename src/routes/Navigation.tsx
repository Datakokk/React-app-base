import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

import logo from  '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={ logo } alt="React logo" />
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive } )=> isActive ? 'nav-active' : '' }>Shopping</NavLink>
                    </li>
                    <li>
                        <NavLink to="/lazy2" className={({ isActive } )=> isActive ? 'nav-active' : '' }>Lazy 2</NavLink>
                    </li>
                    <li>
                        <NavLink to="/lazy3" className={({ isActive } )=> isActive ? 'nav-active' : '' }>Lazy 3</NavLink>
                    </li>
                </ul>
            </nav>
        
            <Routes>
                <Route path="/" element={<ShoppingPage />}/>
                <Route path="lazy2" element={<h1>Home</h1>}/>
                <Route path="lazy3" element={<h1>Home</h1>}/>

                <Route path="/*" element={<Navigate to="/lazy1" replace />}/>
            </Routes>
        </div>

    </BrowserRouter>
  )
}
