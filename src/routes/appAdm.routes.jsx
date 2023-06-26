import { Routes, Route } from "react-router-dom"

import { NewDish } from '../pages/pagesAdm/NewDish'
import { HomeAdm } from '../pages/pagesAdm/HomeAdm'
import { MenuAdm } from '../pages/pagesAdm/MenuAdm'
import { SingIn } from '../pages/pagesLogin/SingIn'
import { EditDish } from '../pages/pagesAdm/EditDish'
import { DishDetailsAdm } from '../pages/pagesAdm/DishDetailsAdm'

export function AppRoutesAdm(){
    return(
      <Routes>
        <Route path="/" element={<HomeAdm/>} />
        <Route path="/new" element={<NewDish/>} />
        <Route path="/menu" element={<MenuAdm/>} />
        <Route path="/login" element={<SingIn/>} />
        <Route path="/edit" element={<EditDish/>} />
        <Route path="/details" element={<DishDetailsAdm/>} />
      </Routes>
    )
}