import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import "./assets/fonts/fonts.css";

import { store } from "./store/index";
import { Provider } from "react-redux";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    --green-color: rgba(161, 209, 139, 1);
    --green-background-color: rgba(150, 234, 143, 0.13);

    --cyan-color: rgba(139, 197, 209, 1);
    --cyan-background-color: rgba(143, 212, 234, 0.13);

    --yellow-color: rgba(209, 194, 139, 1);
    --yellow-background-color: rgba(234, 214, 143, 0.13);
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    color: #EEEEEE;
    background-color: #1C1C1C;

    font-family: 'lars', sans-serif;
    font-weight: 300;
    font-size: 16px;
  }

  #root {
    width: 430px;
    height: 900px;
    padding: 20px;

    background-color: #151515;
    position: relative;
  }
`;

const app = ReactDOM.createRoot(document.getElementById("app"));

<React.StrictMode>
  {app.render(
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  )}
</React.StrictMode>;
