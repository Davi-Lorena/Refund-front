import { Routes, Route } from "react-router"

import { Refund } from "../pages/Refund"
import { NotFound } from "../pages/NotFound"


export function EmployeeRoutes() {
return (
<Routes>
    <Route> 
        <Route path="/" element={<Refund />} />
    </Route>

    <Route path="*" element={<NotFound />} />
</Routes>
)

}