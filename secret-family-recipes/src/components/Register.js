import React, { useState } from 'react';

import AxiosWithAuth from '../utils/AxiosWithAuth';

function Register(props) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const register = e => {
    e.preventDefault();
    AxiosWithAuth()
      .post('auth/register', user)
      .then(res => {
        console.log('Register', res);
        alert('You May Log In Now');
        props.history.push('/login');
      })
      .catch(err => {
        console.log('Register Err is: ', err);
      });
    // AxiosWithAuth()
    //   .post('auth/login', user)
    //   .then(res => {
    //     localStorage.setItem('token', res.data.token);
    //     props.history.push('/recipes-home');
    //   })
    //   .catch(err => {
    //     console.log('Login Err is: ', err);
    //   });
  };
  return (
    <section className='loginForm'>
      <form onSubmit={register}>
        <label>Name:</label>
        <input
          type='text'
          name='name'
          value={user.name}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type='email'
          name='email'
          value={user.email}
          onChange={handleChange}
        />
        <br />
        <label>Password: </label>
        <input
          type='password'
          name='password'
          value={user.password}
          onChange={handleChange}
        />
        <br />
        <button type='submit'>Log In</button>
      </form>
    </section>
  );
}
export default Register;
