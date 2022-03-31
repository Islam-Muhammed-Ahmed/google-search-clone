import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ResultContextProvider } from "./context/ResultContextProvider";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const root = document.getElementById("root");
ReactDOM.render(
  <ResultContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ResultContextProvider>,
  root
);

reportWebVitals();
