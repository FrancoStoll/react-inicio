import { BrowserRouter } from "react-router-dom"
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import imgLogo from '../assets/react.svg'



export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={imgLogo} alt="imagen logo react" />
                    <ul>
                        <li>
                            <NavLink to='/' className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-active' : ''} >About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/users' className={({ isActive }) => isActive ? 'nav-active' : ''} >Users</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="about" element={<h1>About Page</h1>} />
                    <Route path="users" element={<h1>Users Page</h1>} />
                    <Route path="/" element={<h1>Index Page</h1>} />
                    <Route path="/*" element={<Navigate to='/' replace />} />
                </Routes>
            </div>




        </BrowserRouter>
    )
}
