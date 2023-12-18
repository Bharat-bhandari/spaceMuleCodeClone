import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppBar from "./components/codeStyle/AppBar.jsx";
import Hero from "./components/Hero.jsx";
import Test from "./components/codeStyle/Test.jsx";
import ActivityIndicator from "./components/codeStyle/ActivityIndicator.jsx";
import Typography from "./components/codeStyle/Typography.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Hero /> },
      { path: "/app-bar", element: <AppBar /> },
      { path: "/activity-indicator", element: <ActivityIndicator /> },
      { path: "/typography", element: <Typography /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
