import React from 'react'
import theme from './styles/theme'
import ReactDOM from 'react-dom/client'

import { SingIn } from './pages/SingIn'
import { SingUp } from './pages/SingUp'
import { NewDish } from './pages/NewDish'
import { HomeAdm } from './pages/HomeAdm'
import { MenuAdm } from './pages/MenuAdm'
import { EditDish } from './pages/EditDish'
import { GlobalStyle } from './styles/global'
import { MenuClient } from './pages/MenuClient'
import { HomeClient } from './pages/HomeClient'
import { ThemeProvider } from 'styled-components'
import { DishDetailsAdm } from './pages/DishDetailsAdm'
import { DishDetailsClient } from './pages/DishDetailsClient'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <DishDetailsAdm/>
    </ThemeProvider>
  </React.StrictMode>,
)