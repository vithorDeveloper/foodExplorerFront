import { Routes, Route } from "react-router-dom";

import {SingIn} from '../pages/pagesLogin/SingIn'
import { HomeClient } from '../pages/pagesClient/HomeClient'
import { DishDetailsClient } from '../pages/pagesClient/DishDetailsClient'

export function AppRoutesClient(){
    return(
      <Routes>
        <Route path="/" element={<HomeClient/>} />
        <Route path="/login" element={<SingIn/>} />
        <Route path="/details" element={<DishDetailsClient/>} />
      </Routes>
    )
}