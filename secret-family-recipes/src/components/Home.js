import React from 'react';
import AxiosWithAuth from '../utils/AxiosWithAuth';

function Home() {
  const getUsers = e => {
    e.preventDefault();
    AxiosWithAuth()
      .get('recipes/')
      .then(res => console.log(res))
      .catch(err => console.log('User Get Err:', err));
  };
  return (
    <div>
      Remove this when writing this page!
      <button onClick={getUsers}>Click me</button>
    </div>
  );
}
export default Home;
