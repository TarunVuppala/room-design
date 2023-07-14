import React from 'react';
import { Link } from 'react-router-dom';

import './signUp.css';

function SignUpPage() {
  const openModal = () => {
    document.getElementById('id01').style.display = 'block';
  };

  const closeModal = () => {
    document.getElementById('id01').style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target === document.getElementById('id01')) {
      closeModal();
    }
  };

  return (
    <div className="sign-up">

      <button onClick={openModal} className="btn btn-sm">
        Sign-Up
      </button>

      <div id="id01" className="modal">
        <span onClick={closeModal} className="close" title="Close Modal">
          &times;
        </span>
        <form className="modal-content" >
          <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input type="text" placeholder="Enter Email" name="email" required />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <label htmlFor="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

            <label>
              <input type="checkbox" defaultChecked name="remember" style={{ marginBottom: '15px' }} /> Remember me
            </label>

            <p>
              By creating an account you agree to our <Link to='/PrivacyPolicy'>Terms & Privacy</Link>.
            </p>

            <div className="clearfix">
              <button type="button" onClick={closeModal} className="cancelbtn">
                Cancel
              </button>
              <button type="submit" className="signupbtn">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
