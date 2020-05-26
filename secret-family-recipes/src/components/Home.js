import React from 'react';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import Header from './Navigation/Header';

function Home() {
  const getUsers = e => {
    e.preventDefault();
    AxiosWithAuth()
      .get('/users')
      .then(res => console.log(res))
      .catch(err => console.log('User Get Err:', err));
  };

  const getRecipes = e => {
    e.preventDefault();
    AxiosWithAuth()
      .get('/users/1/recipes')
      .then(res => console.log(res))
      .catch(err => console.log('User Get Err:', err));
  };
  return (
    <div>
      <div className='nav-container'>
          <Header />
        </div>
      <button onClick={getRecipes}>Click me</button>
    </div>
  );
}
export default Home;
