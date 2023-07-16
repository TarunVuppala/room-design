import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function ContactForm() {
  return (
    <>
      <div className="container-fluid m-0 mb-2 p-2 pt-0" style={{ marginTop: '60px' }}>
        <p className="h4 display-5 m-0 d-flex align-items-center" style={{ height: '250px' }}>Contact Us</p>
      </div>

      <div className="container">
        <div className="my-2 p-1">
          You can reach us by email at example.info@mail.com or by phone at +91 XXXXX XXXXX between 9 a.m. to 9 p.m.
        </div>
      </div>

      <div className="container">
        <div className="my-2 p-1">
          <p className="">Leave us a message:</p>
          <form action="/action_page.php">
            <div className="mb-3 mt-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input className="form-control" id="name" placeholder="Enter your name" name="name" required />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input required type="tel" className="form-control" id="phoneNumber" placeholder="Enter your phone number" name="phoneNumber" />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input required type="email" className="form-control" id="email" placeholder="Enter your email address" name="email" />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="comment" className="form-label">Message</label>
              <textarea required className="form-control" rows="5" id="comment" placeholder="Enter your message..." name="text" style={{ height: '200px' }}></textarea>
            </div>
            <div className="d-flex justify-content-center">
            <Link class="btn btn-primary" to="/" role="button">Submit</Link>
            </div>
          </form>
        </div>
      </div>

      <div className="container-sm">
        <p className="h5 ps-2 mb-4">Social Media</p>
        <p className="lead ps-2 mb-4">Follow us on our Social Media platforms and stay connected</p>
        <ul className="list-inline d-flex flex-row align-items-center justify-content-around">
          <li className="list-inline-item">
            <Link to="/" className="text-decoration-none">
              <FontAwesomeIcon icon={faFacebookF} className="fa-2x " style={{ color: '#1877F2' }} />
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="/" className="text-decoration-none">
              <FontAwesomeIcon icon={faTwitter} className="fa-2x " style={{ color: '#1DA1F2' }} />
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="/" className="text-decoration-none">
              <FontAwesomeIcon icon={faLinkedinIn} className="fa-2x " style={{ color: '#2867B2' }} />
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="/" className="text-decoration-none">
              <FontAwesomeIcon icon={faInstagram} className="fa-2x " style={{ color: '#C13584' }} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ContactForm;
