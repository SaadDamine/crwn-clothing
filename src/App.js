import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/shop.component';

import { Routes,Route } from 'react-router-dom';


const Hats = () => (
  <div>this is hats page</div>
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/hats' element={<Hats />} />
      </Routes>
    </div>
  );
}

export default App;
