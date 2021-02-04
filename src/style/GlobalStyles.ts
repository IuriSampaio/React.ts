import * as styled from 'styled-components';

interface backgroundProp {
  isDark: boolean
};

const GlobalStyle = styled.createGlobalStyle<backgroundProp>`
  :root{
    --background-dark: #232323;
    --font-in-dark:#aaaaaa;
    --background-light: #aaaaaa;
    --font-in-light:#232323;
  }
  
  body {
    background-color: ${background => background.isDark ? 'var(--background-dark)' : 'var(background-light)'};
    color: ${background => background.isDark ? 'var(--font-in-dark)' : 'var(font-in-light)'};
  }
`;

export default GlobalStyle;