import React from 'react'
import theme from './styles/theme'
import ReactDOM from 'react-dom/client'

import { SingIn } from './page/SingIn'
import { SingUp } from './page/SingUp'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <SingUp />
    </ThemeProvider>
  </React.StrictMode>,
)
