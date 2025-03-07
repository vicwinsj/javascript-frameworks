import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
display: flex;
flex-direction: column;
align-items: center;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Istok Web", sans-serif;
    font-weight: 400;
    background-color: #fff;
    color: #000;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
