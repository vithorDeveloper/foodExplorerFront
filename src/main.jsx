import React from 'react'
import theme from './styles/theme'
import ReactDOM from 'react-dom/client'

import { SingIn } from './page/SingIn'
import { SingUp } from './page/SingUp'
import { MenuClient } from './page/MenuClient'
import { Home } from './page/home'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
