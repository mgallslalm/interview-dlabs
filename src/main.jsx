import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Sidebar from "./components/Sidebar.jsx";
import ErrorPage from "./error-page";
import Info from "./components/Info.jsx";
import App from "./App.jsx";
import { store } from "./redux/store";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <Sidebar />,
    errorElement: <ErrorPage />,
    children: [
      { 
        path: "/", 
        element: <App /> 
      },
      {
        path: "info",
        element: <Info />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
