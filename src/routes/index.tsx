import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes";

import { EmployeeRoutes } from "./EmplyoeeRoutes";

export function Routes() {
    return ( 
    <BrowserRouter>
    <EmployeeRoutes />
    </BrowserRouter>
    )
}