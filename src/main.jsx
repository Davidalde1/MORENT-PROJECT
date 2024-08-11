import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import { CarProvider } from "./components/Context/CarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CarProvider>
      <App />
    </CarProvider>
  </React.StrictMode>
);













