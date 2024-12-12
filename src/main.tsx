import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./router/index";
import { RouterProvider } from "react-router-dom";
import ReactQueryProvider from "./provider/react-query";
import { AuthProvider } from "./provider/auth";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ReactQueryProvider>
  </StrictMode>
);
