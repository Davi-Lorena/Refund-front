import { Routes, Route } from "react-router"

import { SignIn } from "../pages/Signin"

export function AuthRoutes() {
    return (
        <Routes>
<Route path="/" index element={<SignIn />} />
        </Routes>
    )
}