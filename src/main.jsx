import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import PrimeReact from "primereact/api";
import { createDbContext } from "./utils/firebase";
PrimeReact.ripple = true;
PrimeReact.inputStyle = "filled";
PrimeReact.appendTo = "self";
PrimeReact.zIndex = {
  modal: 1100,
  overlay: 1000,
  menu: 1000,
  tooltip: 1100,
  toast: 1400,
};
PrimeReact.autoZIndex = true;

createDbContext();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
