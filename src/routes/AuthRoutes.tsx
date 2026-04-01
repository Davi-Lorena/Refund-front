import { Routes, Route } from "react-router"

import { AuthLayout } from "../components/AuthLayout"

import { SignIn } from "../pages/Signin"
import { SignUp } from "../pages/Signup"
import { NotFound } from "../pages/NotFound"

export function AuthRoutes() {
    return (
<Routes>
    <Route path="/" element={<AuthLayout />}>
        <Route path="/" index element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
    </Route>

    <Route path="*" element={<NotFound />} />
</Routes>
    )
}