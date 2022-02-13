import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-size: 16px;
    font-weight: 600;
  }

  body {
    margin: 0;
    padding: 2rem;
    color: var(--main-font-color);
    background: hsl(237, 49%, 15%);
    background: var(--main-bg-color);
  }

  img {
    width: auto;
    max-width: cover;
  }

  button {
    appearance: none;
    border-radius: 0;
  }
`;

export default GlobalStyle;
