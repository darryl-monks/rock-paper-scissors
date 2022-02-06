import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-size: 16px;
  }

  html, body {
    margin: 0;
  }
`;

export default GlobalStyle;
