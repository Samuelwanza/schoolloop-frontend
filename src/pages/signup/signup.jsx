import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRequests } from '../../redux/feature/requests/requestsSlice';
import AdminNavbar from '../../components/AdminNavbar';
import Styles from './signup.module.css';
import { postRequest } from '../../services/apiService';

const SignUp = () => {
  const dispatch = useDispatch();
  const { requests } = useSelector((state) => state.requests);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [role, setRole] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const navigate = useNavigate();
  console.log(requests);
  useEffect(() => {
    dispatch(fetchRequests());
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

    if (!passwordPattern.test(password) || password !== confirmPassword) {
      console.error('password invalid');
    }
    postRequest('register', {
      name, email, password, role,
    });
    navigate('/admin/requests');
  };

  return (
    <div className="container">
      <AdminNavbar />
      <form className={Styles.formContainer} onSubmit={onSubmit}>
        <h2>Add User</h2>
        {/*eslint-disable */}
        <label htmlFor="role">Role</label>
          <select
            name="roles"
            id="roles"
            onChange={(e)=>setRole(e.target.value)}
            value={role}
          >
              <option key="role" value='team lead'>Team Lead</option>
              <option key="role1" value='facilitator'>Facilitator</option>
              <option key="role2" value='student'>Student</option>
          </select>
          {/* eslint-disable */}
        <label htmlFor="email">Name</label>
        {/* eslint-enable */}
        <input
          type="Name"
          placeholder="Thompson Kitee"
          id="email"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {/* eslint-disable */}
        <label htmlFor="email">Email</label>
        {/* eslint-enable */}
        <input
          type="email"
          placeholder="example@gmail.com"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* eslint-disable */}
        <label htmlFor="password">Password</label>
        {/* eslint-enable */}
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* eslint-disable */}
        <label htmlFor="password">Confirm Password</label>
        {/* eslint-enable */}
        <input
          type="password"
          id="password1"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {password && (
        <>
          <p style={{ color: /(?=.*[a-z])/.test(password) ? 'green' : 'red' }}>
            Password must contain at least one lowercase letter
          </p>
          <p style={{ color: /(?=.*[A-Z])/.test(password) ? 'green' : 'red' }}>
            Password must contain at least one uppercase letter
          </p>
          <p style={{ color: /(?=.*\d)/.test(password) ? 'green' : 'red' }}>
            Password must contain at least one number
          </p>
          <p style={{ color: password.length >= 8 ? 'green' : 'red' }}>
            Password must be at least 8 characters
          </p>
          <p style={{ color: confirmPassword === password ? 'green' : 'red' }}>
            Passwords match
          </p>
        </>
        )}

        <button type="submit">Add</button>
      </form>

    </div>
  );
};

export default SignUp;
