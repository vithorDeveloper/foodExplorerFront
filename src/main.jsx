import React from 'react'
import theme from './styles/theme'
import ReactDOM from 'react-dom/client'

import { SingIn } from './page/SingIn'
import { SingUp } from './page/SingUp'
import { NewDish } from './page/NewDish'
import { HomeAdm } from './page/HomeAdm'
import { MenuAdm } from './page/MenuAdm'
import { EditDish } from './page/EditDish'
import { GlobalStyle } from './styles/global'
import { MenuClient } from './page/MenuClient'
import { HomeClient } from './page/HomeClient'
import { ThemeProvider } from 'styled-components'
import { DishDetailsAdm } from './page/DishDetailsAdm'
import { DishDetailsClient } from './page/DishDetailsClient'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <HomeClient />
    </ThemeProvider>
  </React.StrictMode>,
)