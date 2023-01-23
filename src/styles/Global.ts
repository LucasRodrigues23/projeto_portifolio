import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

:root {
  --color-primary: #00AFEF;
  --greyscale-100: #000000;
}
body,html{
    width: 100vw;
    height: 100vh;
    background-color: var(--greyscale-100);
}
body {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
}

button {
    cursor: pointer;
}
ul, ol, li{
    list-style: none;
}
`