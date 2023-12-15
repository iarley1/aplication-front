import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/login"
import { RegisterPage } from "../pages/register"
import { DashboardPage } from "../pages/dashboard"

export function MainRoutes () {
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/dashboard" element={<DashboardPage/>}/>
        </Routes>
    )
}