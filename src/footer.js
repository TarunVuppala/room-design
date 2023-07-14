import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    const [inputTerm, setInputTerm] = useState('');

    const handleSubmitInputChange = (event) => {
        setInputTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Code to handle submit
        console.log('Search submitted:', inputTerm);
    };
    return (
        <>
            <footer className="container-fluid bg-dark text-light overflow-hidden position-bottom lh-lg" style={{ height: "auto" }}>
                <div className="row p-5 container-fluid" style={{ height: "auto" }}>
                    <div className="ps-5 col-lg-5 col-sm-12 col-md-8 container-fluid" style={{ height: "auto" }}>
                        <NavLink className="text-decoration-none h3" to='/'>The Decor Nest</NavLink>
                        <p className="fw-lighter pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, tempore!</p>
                        <FontAwesomeIcon icon={faHome} size="lg" />
                        <p className="h-no fw-lighter ps-3 d-inline">Plot No.-XXX "Area Name" "City-Pin Code"</p>
                        <br />
                        <FontAwesomeIcon icon={faPhone} size="lg" />
                        <p className="ph-no fw-lighter ps-3 d-inline">+91 XXXXX XXXXX</p>
                        <br />
                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        <p className="mailIco fw-lighter ps-3 d-inline">example.info@mail.com</p>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-md-4 container-fluid">
                        <p className="h5 pt-4 border-bottom pd-1" style={{ width: "fit-content" }}>Quick Links</p>
                        <ul className="list-inline">
                            <li className="ql-hov"><FontAwesomeIcon icon={faArrowRight} size="lg" />
                                <NavLink className="ps-2 text-decoration-none text-light" to="/">Home</NavLink>
                            </li>
                            <li className="ql-hov"><FontAwesomeIcon icon={faArrowRight} size="lg" />
                                <NavLink className="ps-2 text-decoration-none text-light" to="/products">Products</NavLink>
                            </li>
                            <li className="ql-hov"><FontAwesomeIcon icon={faArrowRight} size="lg" />
                                <NavLink className="ps-2 text-decoration-none text-light" to="/faq">FAQ's</NavLink>
                            </li>
                            <li className="ql-hov"><FontAwesomeIcon icon={faArrowRight} size="lg" />
                                <NavLink className="ps-2 text-decoration-none text-light" to='/PrivacyPolicy'>Privacy Policy</NavLink>
                            </li>
                            <li className="ql-hov"><FontAwesomeIcon icon={faArrowRight} size="lg" />
                                <NavLink className="ps-2 text-decoration-none text-light" to="/contact">Contact Us</NavLink>
                            </li>
                            <li className="ql-hov"><FontAwesomeIcon icon={faArrowRight} size="lg" />
                                <NavLink className="ps-2 text-decoration-none text-light" to='/termsAndCondn'>Terms &amp; Conditions</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-6 bg-dark text-light">
                        <div className="container">
                            <div className="row">

                                <div className=" container-fluid" style={{ height: "auto" }}>
                                    <div className=" row">
                                        <p className="h5 ps-2 pt-4 border-bottom pd-1 " style={{ width: "fit-content" }}>Write to Us...</p>
                                        <form className="mail-form d-flex align-items-center justify-content-between border-bottom pb-2 " onSubmit={handleSubmit} id="dform">
                                            <FontAwesomeIcon icon={faEnvelope} size="lg" />
                                            <input className="data border-0 bg-transparent ps-3" style={{ width: "100%", color: "#ccc", outline: "none" }} value={inputTerm}
                                                onChange={handleSubmitInputChange}
                                                placeholder="Enter your mail" required />
                                            <button className="sendBtn border-0 bg-transparent" style={{ outline: "none", color: "#ccc" }} type="submit" ><FontAwesomeIcon icon={faArrowRight} size="lg" />
                                            </button>
                                        </form>
                                    </div>
                                    <div className="row">
                                        <p className="h5 ps-2 my-4  border-bottom" style={{ width: "fit-content" }}>Social Media</p>
                                        <ul className="list-inline d-flex flex-row align-items-center justify-content-around">
                                            <li className="">
                                                <Link to="/"><FontAwesomeIcon icon={faFacebookF} className="fa-xl" style={{ color: "#ffffff" }} />
                                                </Link></li>
                                            <li className="">
                                                <Link to="/"><FontAwesomeIcon icon={faLinkedinIn} className="fa-xl" style={{ color: "#ffffff" }} />
                                                </Link></li>
                                            <li className="">
                                                <Link to="/"><FontAwesomeIcon icon={faTwitter} className="fa-xl" style={{ color: "#ffffff" }} />
                                                </Link></li>
                                            <li className="">
                                                <Link to="/"><FontAwesomeIcon icon={faInstagram} className="fa-xl" style={{ color: "#ffffff" }} />
                                                </Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-3 pb-0 mb-0 container-fluid bg-dark text-light overflow-hidden lh-lg text-center" style={{ height: 'auto' }}>
                        Copyright<sup>&#169;</sup> 2023 Company Name Pvt. All Rights Reserved
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
