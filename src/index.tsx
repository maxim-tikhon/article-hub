import { createRoot } from 'react-dom/client'
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import React from "react";

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
