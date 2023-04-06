import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/errorPage";
import Home from "./pages/home";
import CommissionInfo from "./pages/commission-info";
import Art2D from "./pages/art2D";
import Art3D from "./pages/art3D";
import About from "./pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/commission-info",
        element: <CommissionInfo />,
      },
      {
        path: "/2D-art",
        element: <Art2D />,
      },
      {
        path: "/3D-art",
        element: <Art3D />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
