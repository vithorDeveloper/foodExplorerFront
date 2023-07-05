import { Routes, Route } from "react-router-dom";

import { HomeClient } from '../pages/pagesClient/HomeClient'
import { DishDetailsClient } from '../pages/pagesClient/DishDetailsClient'

export function AppClientRoutes(){
    return(
      <Routes>
        <Route path="/" element={<HomeClient/>} />
        <Route path="/details/:id" element={<DishDetailsClient/>} />
      </Routes>
    )
}

// import { Routes, Route } from "react-router-dom";
// import { useAuth } from "../hooks/authContext";

// import { HomeClient } from '../pages/pagesClient/HomeClient'
// import { DishDetailsClient } from '../pages/pagesClient/DishDetailsClient'
// import { SingIn } from '../pages/pagesLogin/SingIn'

// export function AppClientRoutes(){
//   const { user } = useAuth();

//   return(
//     <Routes>
//       <Route path="/" element={user ? <HomeClient /> : <SingIn />} />
//       <Route path="/details/:id" element={<DishDetailsClient/>} />
//     </Routes>
//   );
// }