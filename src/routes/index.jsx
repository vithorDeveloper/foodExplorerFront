import { BrowserRouter } from "react-router-dom"

import { AuthRoutes } from "./auth.routes"
// import { AppRoutesAdm } from "./app.routes.adm"
// import { AppRoutesClient } from "./app.routes.client"

export function Routes(){
  return(
    <BrowserRouter>
    {/* <AppRoutesClient/> */}
    {/* <AppRoutesAdm/> */}
    <AuthRoutes/>
  </BrowserRouter>
  )
}