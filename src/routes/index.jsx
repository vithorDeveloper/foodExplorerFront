import { BrowserRouter } from "react-router-dom"

import { useAuth } from "../hooks/authContext"
import { AuthRoutes } from "./auth.routes"
// import { AppRoutesAdm } from "./appAdm.routes.adm"
import { AppClientRoutes } from "./appClient.routes"

export function Routes(){
const { user } = useAuth()

  return(
    <BrowserRouter>
    {user ? <AppClientRoutes /> : <AuthRoutes />}
  </BrowserRouter>
  )
}