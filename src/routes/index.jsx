import { BrowserRouter } from "react-router-dom";

import { AppRoutesClient } from "./app.routes.client";
// import { AppRoutesAdm } from "./app.routes.adm";
// import { AuthRoutes } from "./auth.routes";

export function Routes(){
  return(
    <BrowserRouter>
    {/* <AppRoutesClient/> */}
    <AppRoutesAdm/>
    {/* <AuthRoutes/> */}
  </BrowserRouter>
  )
}