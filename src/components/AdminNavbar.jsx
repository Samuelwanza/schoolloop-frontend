import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import './Header';

const AdminNavbar = () => (
  <nav className="Nav">
    <img src={Logo} alt="logo" width="200px" height="120px" />
    <ul className="NavItems Link">
      <li className="Link">
        <Link to="/admin/requests">requests</Link>
      </li>
      <li>
        <Link to="/admin/task">tasks</Link>
      </li>
      <li>
        <Link to="/admin/adduser">Add User</Link>
      </li>
      <li className="button">
        <Link className="button" to="/">Login</Link>
      </li>
    </ul>
  </nav>
);

export default AdminNavbar;
