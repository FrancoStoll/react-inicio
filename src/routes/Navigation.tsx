import { BrowserRouter } from "react-router-dom"
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import imgLogo from '../assets/react.svg'
import { routes } from "./routes"
import { Suspense } from "react"





export const Navigation = () => {
    return (
        <Suspense fallback={<span>Hola......</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={imgLogo} alt="imagen logo react" />
                        <ul>
                            {routes.map(route => (
                                <li key={route.to}>
                                    <NavLink
                                        className={({ isActive }) => isActive ? 'nav-active' : ''}
                                        to={route.to}>{route.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Routes>
                        {routes.map(route => (
                            <Route key={route.to} path={route.path} element={<route.Component />} />
                        ))}
                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}
