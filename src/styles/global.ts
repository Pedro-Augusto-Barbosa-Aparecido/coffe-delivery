import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  input:focus {
    outline: none;
    border: 1px solid #C47F17;
  }

  body, html {
    width: 100%;

    & > div {
      width: 100%;
    }

    background-color: ${(props) => props.theme["white-200"]};
    font-size: 16px;
  }

  ::-webkit-scrollbar {
    width: 1rem;
    background-color: ${(props) => props.theme["white-100"]};
    border-radius: 0;
    position: fixed;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    background-color: ${(props) => props.theme["white-200"]};
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme["white-200"]};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme["gray-400"]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme["gray-900"]};
    border-radius: 0;
  }
`;
