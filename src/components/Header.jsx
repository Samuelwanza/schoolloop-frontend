import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/planet.png';
import './Header.css';

export default function Header() {
  return (
    <nav className="Nav">
      <NavLink className="Link AppLogo" to="/">
        <img width="40px" alt="" srcSet={Logo} />
        Space X
      </NavLink>
      <ul className="NavItems">
        <li><NavLink className="Link" to="/">Rockets</NavLink></li>
        <li><NavLink className="Link" to="/missions">Missions</NavLink></li>
        <li><NavLink className="Link" to="/profile">My Profile</NavLink></li>
      </ul>
    </nav>
  );
}
