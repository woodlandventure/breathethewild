import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import "./index.css";
import { NavHomeFinalSectionProvider } from "./context/NavHomeFinalSectionContext";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavHomeFinalSectionProvider>
      <RouterProvider router={router} />
    </NavHomeFinalSectionProvider>
  </React.StrictMode>
);
