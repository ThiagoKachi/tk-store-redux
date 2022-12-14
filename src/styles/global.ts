import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Raleway", Arial, sans-serif;
    font-feature-settings: 'lnum';
  }
`;

export default GlobalStyles;
