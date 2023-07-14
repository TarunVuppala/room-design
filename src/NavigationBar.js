import React from 'react';
// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import LoginPage from './login'
import SignUpPage from './signUp'


function NavigationBar() {
  // const [searchTerm, setSearchTerm] = useState('');

  // const handleSearchInputChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Code to handle search
  //   console.log('Search submitted:', searchTerm);
  // };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-success sticky-top fixed-top">
      <div className="container-fluid">
        {/* Brand name */}
        <Link className="navbar-brand" to="/">The Decor Nest</Link>

        {/* Toggler icon */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-nav" aria-controls="navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
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
          {/* Search form */}
          {/* <form onSubmit={handleSubmit} className="d-flex border rounded-pill">
            <input
              type="search"
              placeholder="Search..."
              className="form-control me-2 border-0 bg-transparent"
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
            <button type="submit" className="btn rounded-pill ">
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
