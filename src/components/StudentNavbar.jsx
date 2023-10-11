import React from 'react';
import { Link } from 'react-router-dom';
import './Header';
import Logo from '../assets/logo.png';

const StudentNavbar = () => (
  <nav className="Nav">
    <img src={Logo} alt="logo" width="200px" height="120px" />
    <ul className="NavItems Link">
      <li className="Link">
        <Link to="/student/facilitators">facilitators</Link>
      </li>
      <li>
        <Link to="/student/admin">admin</Link>
      </li>
      <li>
        <Link to="/student/request">request</Link>
      </li>
      <li>
        <Link to="/student/adminrequest">admin request</Link>
      </li>
      <li className="button">
        <Link to="/" className="button">Login</Link>
      </li>

    </ul>
  </nav>
);

export default StudentNavbar;
