import { createBrowserRouter, Navigate } from "react-router-dom";
import { App } from "../pages/app/App";
import { Shop } from '../pages/shop/Shop';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <div>Cart</div>
      }
    ]
  },
]);
