import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
  }

  body, button, input, textarea{
    font-family: 'Barlow', sans-serif;
    outline: none;
    border: none;
  }

  a, button{
    text-decoration: none;
    background-color: none;
    cursor: pointer;
    transition: filter 0.4s;
  }

  input{
    transition: filter 0.4s;
  }

  a:hover, button:hover, input:hover{
    filter: brightness(0.9)
  }
`
