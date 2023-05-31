import React from 'react'
import theme from './styles/theme'
import ReactDOM from 'react-dom/client'

import { SingIn } from './page/SingIn'
import { SingUp } from './page/SingUp'
import { GlobalStyle } from './styles/global'
import { MenuClient } from './page/MenuClient'
import { MenuAdm } from './page/MenuAdm'
import { Home } from './page/Home'
import { ThemeProvider } from 'styled-components'
import { DishDetails } from './components/dishDetails'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Home />
    </ThemeProvider>
  </React.StrictMode>,
)