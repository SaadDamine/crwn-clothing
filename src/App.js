import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Entry from './pages/entry/entry.component';

import './App.css';

const Hats = () => (
  <div>this is hats page</div>
);

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/hats' element={<Hats />} />
        <Route path='/entry' element={<Entry />} />
      </Routes>
    </div>
  );
}

export default App;