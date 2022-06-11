import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./styles/index.scss";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <Provider store={store}>
    <MoralisProvider
      serverUrl="https://bi4uak1fq34x.usemoralis.com:2053/server"
      appId="HQ3fVf8n1b9hm771idklsSY8oAjPknNmEyG1fD1b"
    >
      <App />
    </MoralisProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
