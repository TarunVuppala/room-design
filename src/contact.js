import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


function ContactForm (){
  return (
    <>
      <div className="container-fluid m-0 mb-2 p-2 pt-0">
        <p className="h4 display-5 m-0 d-flex align-items-center" style={{ height: '250px' }}>Contact Us</p>
      </div>

      <div className="container">
        <div className="my-2 p-1">
          You can directly mail us to example.info@mail.com or call us at +91 XXXXX XXXXX between 9 a.m. to 9 p.m.
        </div>
      </div>

      <div className="container">
        <div className="my-2 p-1">
          <p className="">You can write your message here</p>
          <form action="/action_page.php">
            <div className="mb-3 mt-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input className="form-control" id="name" placeholder="Enter name" name="name" required />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input required type="tel" className="form-control" id="phoneNumber" placeholder="Enter Phone Number" name="phoneNumber" />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input required type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="comment" className="form-label">Type your message</label>
              <textarea required className="form-control" rows="5" id="comment" placeholder="Your message..." name="text" style={{ height: '200px' }}></textarea>
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
          </form>
        </div>
      </div>

      <div className="container-sm">
        <p className="h5 ps-2 mb-4">Social Media</p>
        <p className="lead ps-2 mb-4">Follow us on our Social Media platforms and stay connected</p>
        <ul className="list-inline d-flex flex-row align-items-center justify-content-around">
          <li className="fb"><Link to="/"><FontAwesomeIcon icon={faFacebookF} className="fa-xl" style={{ color: '#3b5998' }} /></Link></li>
          <li className=""><Link to="/"><FontAwesomeIcon icon={faTwitter} className="fa-xl" style={{ color: '#1DA1F2' }} /></Link></li>
          <li className=""><Link to="/"><FontAwesomeIcon icon={faLinkedinIn} className="fa-xl"  style={{ color: '#0A66C2' }} /></Link></li>
          <li className=""><Link to="/"><FontAwesomeIcon icon={faInstagram} className="fa-xl" style={{ color: "#000" }} /></Link></li>
        </ul>
      </div>
    </>
  );
}

export default ContactForm;
