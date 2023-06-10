import { Routes, Route } from "react-router-dom";

import { SingUp } from '../pages/pagesLogin/SingUp'
import { SingIn } from '../pages/pagesLogin/SingIn'

export function AuthRoutes(){
    return(
      <Routes>
        <Route path="/" element={<SingIn/>} />
        <Route path="/register" element={<SingUp/>} />
      </Routes>
    )
}