import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-size: 16px;
    font-weight: 600;
  }

  body {
    margin: 0;
    padding: 2rem;
    color: var(--main-font-color);
    background-color: hsl(237, 49%, 15%);
    background-image: var(--main-bg-color);
    background-attachment: fixed;
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
