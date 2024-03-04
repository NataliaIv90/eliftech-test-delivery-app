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
        element: <Navigate to='shop' />,
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "cart",
        element: <div>Cart</div>
      }
    ]
  },
]);
