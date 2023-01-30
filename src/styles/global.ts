import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 1px solid ${({ theme }) => theme.blue}
  }

  body{
    background: ${({ theme }) => theme['base-background']};
    color: ${({ theme }) => theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area, button{
    font: 400 1rem Nunito, sans-serif;
    line-height: 160%;
  }

`
