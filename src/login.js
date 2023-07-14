import React from 'react';
import { Link } from 'react-router-dom';

import './Login.css'

function LoginPage() {
    const openModal = () => {
        document.getElementById('id02').style.display = 'block';
    };

    const closeModal = () => {
        document.getElementById('id02').style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target === document.getElementById('id02')) {
            closeModal();
        }
    };

    return (
        <div className="login-btn ">
            <button onClick={openModal} className="btn btn-sm">
                Login
            </button>

            <div id="id02" className="modal">
                <form className="modal-content animate" method="post">


                    <div className="container">
                        <label htmlFor="uname">
                            <b>Username</b>
                        </label>
                        <input type="text" placeholder="Enter Username" name="uname"  />

                        <label htmlFor="psw">
                            <b>Password</b>
                        </label>
                        <input type="password" placeholder="Enter Password" name="psw"  />

                        <button className='btn btn-lg btn-success' type="submit">Login</button>
                        <label>
                            <input type="checkbox" defaultChecked name="remember" /> Remember me
                        </label>

                    </div>

                    <div className="container d-flex align-items-center justify-content-between" style={{ backgroundColor: '#f1f1f1' }}>
                        {/* <p className="">Don't have an account.<SignUpPage /></p> */}
                        <span className="psw"><Link to='/'> Forgot password?</Link>
                        </span>
                        <button type="button" onClick={closeModal} className="cancelbtn">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
