import { Routes, Route } from "react-router-dom"

import { NewDish } from '../pages/pagesAdm/NewDish'
import { HomeAdm } from '../pages/pagesAdm/HomeAdm'
import { EditDish } from '../pages/pagesAdm/EditDish'
import { DishDetailsAdm } from '../pages/pagesAdm/DishDetailsAdm'

export function AppAdmRoutes(){
    return(
      <Routes>
        <Route path="/" element={<HomeAdm/>} />
        <Route path="/new" element={<NewDish/>} />
        <Route path="/edit/:id" element={<EditDish/>} />
        <Route path="/details/:id" element={<DishDetailsAdm/>} />
      </Routes>
    )
}