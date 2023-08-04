import { createRoot } from 'react-dom/client'
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import React from "react";
import "./shared/config/i18n/i18n"

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
     <BrowserRouter>
        <ThemeProvider>
             <App />
        </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
