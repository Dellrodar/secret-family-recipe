import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import './App.css';

import PrivateRoute from './components/Navigation/PrivateRoute';
import Header from './components/Navigation/Header';
import Home from './components/Home';
import logoSmall from './img/SmallColorLogo.png';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='nav-container'>
          <Header />
        </div>
        <img src={logoSmall} alt='Logo' />
        <div className='routes'>
          <Switch>
            <Route path='/login' component={Auth} />
            <Route path='/register' component={Auth} />
            <Route exact path='/' component={Auth} />
            <PrivateRoute path='/recipes-home' component={Home} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
