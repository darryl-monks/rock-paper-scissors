import { createGlobalStyle } from 'styled-components';

const ThemeStyle = createGlobalStyle`
  :root {
    --main-font-color: #fff;
    --main-bg-color: radial-gradient(circle, hsl(214, 47%, 23%) 0%, hsl(237, 49%, 15%) 100%);
  }
`;

export default ThemeStyle;
