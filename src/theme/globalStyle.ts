import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background-color: #1e90ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    height: 100vh;
    font-family: 'Spoqa Han Sans', 'sans-serif';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: black;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  div, p {
    margin: 0;
    padding: 0;
    line-height: 1.1;
  }

  button {
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
}
`;

export default GlobalStyle;
