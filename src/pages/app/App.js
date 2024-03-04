import { Header } from '../header/Header';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <>
        <Outlet />
      </>
    </div>
  );
}

export default App;
