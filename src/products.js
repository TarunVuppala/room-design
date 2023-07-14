import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './products.css';

import p1 from './Images/product1.jpg';
import p2 from './Images/product2.jpg';
import p3 from './Images/product3.jpg';
import p6 from './Images/product1.jpg';
import p5 from './Images/product2.jpg';
import p4 from './Images/product3.jpg';


function ProductsPage() {
  useEffect(() => {
    // Image zoom on hover
    const cardImages = document.querySelectorAll('.card-img-top');
    cardImages.forEach((cardImage) => {
      cardImage.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1)';
      });

      cardImage.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
      });
    });

    // Display additional product information on overlay
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      card.addEventListener('mouseenter', function () {
        this.querySelector('.card-overlay').style.opacity = '1';
      });

      card.addEventListener('mouseleave', function () {
        this.querySelector('.card-overlay').style.opacity = '0';
      });
    });
  }, []);

  return (
    <>
      <div className="container-fluid m-0 mb-2 p-2 pt-0">
        <p className="h4 display-5 m-0 d-flex align-items-center" style={{ height: '250px' }}>
          Products
        </p>
      </div>
      <div className="card-body" style={{ height: '1000px' }}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="position-relative">
                  <img src={p1} className="card-img-top" alt="Product 1" />
                  <div className="card-overlay">
                    <h5>Product 1</h5>
                    <p>Description of Product 1.</p>
                    <Link to="/" className="btn btn-primary">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="position-relative">
                  <img src={p2} className="card-img-top" alt="Product 2" />
                  <div className="card-overlay">
                    <h5>Product 2</h5>
                    <p>Description of Product 2.</p>
                    <Link to="/" className="btn btn-primary">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="position-relative">
                  <img src={p3} className="card-img-top" alt="Product 3" />
                  <div className="card-overlay">
                    <h5>Product 3</h5>
                    <p>Description of Product 3.</p>
                    <Link to="/" className="btn btn-primary">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="position-relative">
                  <img src={p4} className="card-img-top" alt="Product 3" />
                  <div className="card-overlay">
                    <h5>Product 4</h5>
                    <p>Description of Product 4.</p>
                    <Link to="/" className="btn btn-primary">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="position-relative">
                  <img src={p5} className="card-img-top" alt="Product 3" />
                  <div className="card-overlay">
                    <h5>Product 5</h5>
                    <p>Description of Product 5.</p>
                    <Link to="/" className="btn btn-primary">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="position-relative">
                  <img src={p6} className="card-img-top" alt="Product 3" />
                  <div className="card-overlay">
                    <h5>Product 6</h5>
                    <p>Description of Product 6.</p>
                    <Link to="/" className="btn btn-primary">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
