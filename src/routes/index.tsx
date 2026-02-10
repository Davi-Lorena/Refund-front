import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes";

import { EmployeeRoutes } from "./EmplyoeeRoutes";

import { ManagerRoutes } from "./ManagerRoutes";

import { Loading } from "../components/loading";

const isLoading = false

export function Routes() {
if(isLoading) {
    return <Loading />
}

    return ( 
    <BrowserRouter>
    <AuthRoutes />
    </BrowserRouter>
    )
}