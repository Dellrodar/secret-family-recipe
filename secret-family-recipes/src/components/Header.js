import React from 'react';
import { Link, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';

function Header() {
  const logout = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.reload(false);
  };

  return (
    <div className='nav-bar'>
      {localStorage.getItem('token') === null ? (
        <section className='public-nav'>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </section>
      ) : (
        <section className='private-nav'>
          <Link to='/recipes-home'>All Recipes</Link>
          <button onClick={logout}>Log Out</button>
        </section>
      )}
    </div>
  );
}
export default Header;
