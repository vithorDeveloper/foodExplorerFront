import { Routes, Route } from "react-router-dom";

import { HomeClient } from '../pages/pagesClient/HomeClient'
import { DishDetailsClient } from '../pages/pagesClient/DishDetailsClient'

export function AppClientRoutes(){
    return(
      <Routes>
        <Route path="/" element={<HomeClient/>} />
        <Route path="/details" element={<DishDetailsClient/>} />
      </Routes>
    )
}