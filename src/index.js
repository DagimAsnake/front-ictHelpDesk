import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router-dom";
import { InvAuthContextProvider } from "./components/Store/Inv-authContext";
import { DepAuthContextProvider } from "./components/Store/Dep-authContext";
import { EmpAuthContextProvider } from "./components/Store/Emp-authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DepAuthContextProvider>
    <EmpAuthContextProvider>
      <InvAuthContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </InvAuthContextProvider>
    </EmpAuthContextProvider>
  </DepAuthContextProvider>
);
