import { Header } from '../header/Header';
import { Outlet } from 'react-router-dom';
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div className="App">
        <Header />
        <>
          <Outlet />
        </>
      </div>
    </CartContext.Provider>
  );
}

export default App;
