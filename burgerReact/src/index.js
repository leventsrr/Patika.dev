import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HamburgerContextProvider from "./context/HamburgerContext";

ReactDOM.render(
  <React.StrictMode>
    <HamburgerContextProvider>
      {/* Uygulamayı context provider ile sarmalayınız */}
      <App />
    </HamburgerContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();