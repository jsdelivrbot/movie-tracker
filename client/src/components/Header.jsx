import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AuthButton from './AuthButton.jsx';

const Header = (props) => (
  <nav className="navbar navbar-light">
    <ul className="nav navbar-nav">
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/resources">Resources</Link>
      </li>
      <li className="nav-item">
        <AuthButton {...props}/>
      </li>
    </ul>
  </nav>
);

export default Header;
