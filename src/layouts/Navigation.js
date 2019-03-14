import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.scss'

const Navigation = () => {

  return (
    <nav className="app__nav">
      <ul className="nav__list">
        <li>
          <NavLink to="/home" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;