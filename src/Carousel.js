import React from 'react';

import room1 from './Images/room1.jpeg';
import room2 from './Images/room2.jpg';
import room3 from './Images/room3.jpg';

function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true" style={{ marginTop: '60px' }}>
      {/* Indicator buttons */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">
        </button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
        </button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
        </button>
      </div>
      {/* ----------------------------------- */}
      {/* Images */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={room1} className="d-block w-100 active" alt="..." />
        </div>
        <div className="carousel-item ">
          <img src={room2} className="d-block w-100 active" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={room3} className="d-block w-100 active" alt="..." />
        </div>
      </div>
      {/* ----------------------------------------------- */}
      {/* Control buttons */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      {/* ----------------------------------------------- */}
    </div>
  );
};

export default Carousel;
