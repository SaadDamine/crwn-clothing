import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Entry from './pages/entry/entry.component';

import { auth } from './firebase/firebase.utils';

import './App.css';
import React from 'react';

const Hats = () => (
  <div>this is hats page</div>
);

class App extends React.Component
{
  constructor()
  {
    super();

    this.state = {
      currentUser:null,
    };

  }

  unsubscribeFromAuth = null;

  componentDidMount()
  {
    this.unsubscribeFromAuth=auth.onAuthStateChanged( ( user ) =>
    {
      this.setState( { currentUser: user } );
      console.log( user );
    } );

  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }

  render()
  {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser } />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/hats' element={<Hats />} />
          <Route path='/entry' element={<Entry />} />
        </Routes>
      </div>
    );
  }
  
}

export default App;