import { createGlobalStyle } from 'styled-components';

const ThemeStyle = createGlobalStyle`
  :root {
    --main-font-color: #fff;
    --main-bg-color: linear-gradient(hsl(214, 47%, 23%) 0%, hsl(237, 49%, 15%) 100%);

    --rock: hsl(349, 71%, 52%);
    --paper: hsl(230, 89%, 62%);
    --scissors: hsl(39, 89%, 49%);
    --lizard: hsl(261, 73%, 60%);
    --spock: hsl(189, 59%, 53%);
  }
`;

export default ThemeStyle;
