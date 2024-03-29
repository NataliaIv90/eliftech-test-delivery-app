import { createBrowserRouter } from "react-router-dom";
import { App } from "../pages/app/App";
import { Shop } from '../pages/shop/Shop';
import { Cart } from '../pages/shoppingCart/Cart';

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
        path: "/cart",
        element: <Cart />
      }
    ]
  },
]);
