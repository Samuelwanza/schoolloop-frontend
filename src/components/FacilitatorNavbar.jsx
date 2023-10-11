import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const FacilitatorNavbar = () => (
  <nav className="Nav">
    <img src={Logo} alt="logo" width="200px" height="120px" />
    <ul className="NavItems Link">
      <li className="Link">
        <Link to="/facilitator/students">facilitators</Link>
      </li>
      <li className="button">
        <Link to="/" className="button">Login</Link>
      </li>
    </ul>
  </nav>
);

export default FacilitatorNavbar;
