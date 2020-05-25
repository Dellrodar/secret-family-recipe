import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import './App.css';

import PrivateRoute from './components/Navigation/PrivateRoute';
// import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='nav-container'>{/* <Header /> */}</div>
        <div className='routes'>
          <Switch>
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route exact path='/' component={Login} />
            <PrivateRoute path='/recipes-home' component={Home} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
