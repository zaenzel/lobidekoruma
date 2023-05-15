import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { theme } from "./theme.jsx";
import { ThemeProvider, responsiveFontSizes } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

let tema = responsiveFontSizes(theme)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={tema}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
