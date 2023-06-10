import { Routes, Route } from "react-router-dom";

// import { MenuClient } from '../pages/pagesClient/MenuClient'
import { HomeClient } from '../pages/pagesClient/HomeClient'
import { DishDetailsClient } from '../pages/pagesClient/DishDetailsClient'
import {SingIn} from '../pages/pagesLogin/SingIn'

export function AppRoutesClient(){
    return(
      <Routes>
        <Route path="/" element={<HomeClient/>} />
        <Route path="/login" element={<SingIn/>} />
        <Route path="/details" element={<DishDetailsClient/>} />
      </Routes>
    )
}