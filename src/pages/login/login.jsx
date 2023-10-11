import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../redux/feature/user/userSlice';
import Styles from './login.module.css';
import Logo from '../../assets/logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useNavigate();
  const { user } = useSelector((state) => state.user);
  console.log(user);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email || email === '' || !password || password === '') {
      console.log('Email or password missing');
      return;
    }

    dispatch(fetchUser({ email, password }));
  };
  useEffect(() => {
    if (user.role === 'student') {
      history('/student/facilitators');
    } else if (user.role === 'facilitator') {
      history('/facilitator/students');
    } else if (user.role === 'team lead') {
      history('/admin/requests');
    } else {
      console.log('unauthorized');
    }
  }, [user, history]);

  return (
    <div className={Styles.Container}>

      <form className={Styles.formContainer} onSubmit={onSubmit}>
        <img src={Logo} alt="logo" className={Styles.image} />
        <h2>Login</h2>
        {/* eslint-disable */}
        <label htmlFor="email">Email</label>
        {/* eslint-enable */}
        <input
          type="email"
          placeholder="example@gmail.com"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* eslint-disable */}
        <label htmlFor="password">Password</label>
        {/* eslint-enable */}
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
