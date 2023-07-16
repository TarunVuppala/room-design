import React from 'react';
import { Link } from 'react-router-dom';

import LoginPage from './login'
import SignUpPage from './signUp'

function NavigationBar() {

  return (
    <nav className="navbar navbar-expand-md bg-secondary border-bottom border-dark fixed-top" style={{ height: '60px' }}>
      <div className="container-fluid d-flex align-items-center">
        {/* Brand name */}
        <Link className="navbar-brand ms-auto" to="/">The Decor Nest</Link>

        {/* Toggler icon */}
        <button className="navbar-toggler order-first" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-nav" aria-controls="navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="navbar-nav">
          <ul className="navbar-nav me-auto mt-1">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
          {/* Login */}
          <SignUpPage />
          <LoginPage />
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
