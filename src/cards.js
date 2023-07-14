import React from 'react';
import { Link } from 'react-router-dom';

import './cards.css'

import card1 from './Images/card1.jpg';
import card2 from './Images/card2.jpg';
import card3 from './Images/card3.jpg';
import card4 from './Images/card4.jpg';
import card5 from './Images/card5.jpg';
import card6 from './Images/card6.jpg';

function Cards() {
    return (
        <>
            {/* cards */}
            <h5 className="container mb-2 p-2 display-5">
                Our Services
            </h5>
            <div className="container ">
                {/* card 1 */}
                <div className="fcard container mb-3 my-4 p-1 card-hover border border-2 rounded-4 border-secondary " style={{ width: "auto", maxHeight: "300px" }}>
                    <div className="row g-0 container">
                        <div className="p-3 col-md-4 col-lg-3 col-sm-5 col-5 d-flex justify-content-center align-items-center sticky-top " style={{ maxHeight: "298px" }}>
                            <img src={card1} className="img-fluid rounded-3 " alt="..." />
                        </div>
                        <div className="col-md-8 col-lg-9 col-sm-7 col-7 container mt-1">
                            <div className="container p-3">
                                <Link to='/' className="text-decoration-none text-primary h5">
                                    Feature 1
                                </Link>
                                <p className="py-1 px-3">
                                    What actually it is?It is all about... Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptatem quos voluptatibus aspernatur qui corporis modi ut aperiam ratione porro.
                                    Saepe excepturi obcaecati explicabo eaque! Earum fuga illo numquam delectus vero fugit veniam voluptatum
                                    repudiandae, reprehenderit pariatur distinctio hic aliquam adipisci eligendi iusto vel repellat. Nisi
                                    necessitatibus, rerum illo quibusdam perferendis ut, vel nesciunt quam culpa accusamus at. Fugiat, ad
                                    maxime?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="fcard container mb-3 my-4 p-1 card-hover border border-2 rounded-4 border-secondary " style={{ width: "auto", maxHeight: "300px" }}>
                    <div className="row g-0 container">
                        <div className="col-md-8 col-lg-9 col-sm-7 col-7 container mt-1">
                            <div className="container p-3">
                                <Link to='/' className="text-decoration-none text-primary h5">
                                    Feature 2
                                </Link>
                                <p className="py-1 px-3">
                                    What actually it is?It is all about... Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptatem quos voluptatibus aspernatur qui corporis modi ut aperiam ratione porro.
                                    Saepe excepturi obcaecati explicabo eaque! Earum fuga illo numquam delectus vero fugit veniam voluptatum
                                    repudiandae, reprehenderit pariatur distinctio hic aliquam adipisci eligendi iusto vel repellat. Nisi
                                    necessitatibus, rerum illo quibusdam perferendis ut, vel nesciunt quam culpa accusamus at. Fugiat, ad
                                    maxime?
                                </p>
                            </div>
                        </div>
                        <div className="p-3 col-md-4 col-lg-3 col-sm-5 col-5 d-flex justify-content-center align-items-center sticky-top " style={{ maxHeight: "298px" }}>
                            <img src={card2} className="img-fluid rounded-3 " alt="..." />
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="fcard container mb-3 my-4 p-1 card-hover border border-2 rounded-4 border-secondary " 
                      style={{ width: "auto", maxHeight: "300px" }}>
                    <div className="row g-0 container">
                        <div className="p-3 col-md-4 col-lg-3 col-sm-5 col-5 d-flex justify-content-center align-items-center sticky-top " 
                           style={{ maxHeight: "298px" }}>
                            <img src={card3} className="img-fluid rounded-3 " alt="..." />
                        </div>
                        <div className="col-md-8 col-lg-9 col-sm-7 col-7 container mt-1">
                            <div className="container p-3">
                                <Link to='/' className="text-decoration-none text-primary h5">
                                    Feature 3
                                </Link>
                                <p className="py-1 px-3">
                                    What actually it is?It is all about... Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptatem quos voluptatibus aspernatur qui corporis modi ut aperiam ratione porro.
                                    Saepe excepturi obcaecati explicabo eaque! Earum fuga illo numquam delectus vero fugit veniam voluptatum
                                    repudiandae, reprehenderit pariatur distinctio hic aliquam adipisci eligendi iusto vel repellat. Nisi
                                    necessitatibus, rerum illo quibusdam perferendis ut, vel nesciunt quam culpa accusamus at. Fugiat, ad
                                    maxime?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 4 */}
                <div className="fcard container mb-3 my-4 p-1 card-hover border border-2 rounded-4 border-secondary "
                    style={{ width: "auto", maxHeight: "300px" }}>
                    <div className="row g-0 container">
                        <div className="col-md-8 col-lg-9 col-sm-7 col-7 container mt-1">
                            <div className="container p-3">
                                <Link to='/' className="text-decoration-none text-primary h5">
                                    Feature 4
                                </Link>
                                <p className="py-1 px-3">
                                    What actually it is?It is all about... Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptatem quos voluptatibus aspernatur qui corporis modi ut aperiam ratione porro.
                                    Saepe excepturi obcaecati explicabo eaque! Earum fuga illo numquam delectus vero fugit veniam voluptatum
                                    repudiandae, reprehenderit pariatur distinctio hic aliquam adipisci eligendi iusto vel repellat. Nisi
                                    necessitatibus, rerum illo quibusdam perferendis ut, vel nesciunt quam culpa accusamus at. Fugiat, ad
                                    maxime?
                                </p>
                            </div>
                        </div>
                        <div className="p-3 col-md-4 col-lg-3 col-sm-5 col-5 d-flex justify-content-center align-items-center sticky-top "
                            style={{ maxHeight: "298px" }}>
                            <img src={card4} className="img-fluid rounded-3 " alt="..." />
                        </div>
                    </div>
                </div>
                {/* card 5 */}
                <div className="fcard container mb-3 my-4 p-1 card-hover border border-2 rounded-4 border-secondary "
                    style={{ width: "auto", maxHeight: "300px" }}>
                    <div className="row g-0 container">
                        <div className="p-3 col-md-4 col-lg-3 col-sm-5 col-5 d-flex justify-content-center align-items-center sticky-top "
                            style={{ maxHeight: "298px" }}>
                            <img src={card5} className="img-fluid rounded-3 " alt="..." />
                        </div>
                        <div className="col-md-8 col-lg-9 col-sm-7 col-7 container mt-1">
                            <div className="container p-3">
                                <Link to='/' className="text-decoration-none text-primary h5">
                                    Feature 5
                                </Link>
                                <p className="py-1 px-3">
                                    What actually it is?It is all about... Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptatem quos voluptatibus aspernatur qui corporis modi ut aperiam ratione porro.
                                    Saepe excepturi obcaecati explicabo eaque! Earum fuga illo numquam delectus vero fugit veniam
                                    voluptatum repudiandae, reprehenderit pariatur distinctio hic aliquam adipisci eligendi iusto vel
                                    repellat. Nisi necessitatibus, rerum illo quibusdam perferendis ut, vel nesciunt quam culpa accusamus
                                    at. Fugiat, ad maxime?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 6 */}
                <div className="fcard container mb-3 my-4 p-1 card-hover border border-2 rounded-4 border-secondary "
                    style={{ width: "auto", maxHeight: "300px" }}>
                    <div className="row g-0 container">

                        <div className="col-md-8 col-lg-9 col-sm-7 col-7 container mt-1">
                            <div className="container p-3">
                                <Link to='/' className="text-decoration-none text-primary h5">
                                    Feature 6
                                </Link>
                                <p className="py-1 px-3">
                                    What actually it is?It is all about... Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptatem quos voluptatibus aspernatur qui corporis modi ut aperiam ratione porro.
                                    Saepe excepturi obcaecati explicabo eaque! Earum fuga illo numquam delectus vero fugit veniam
                                    voluptatum repudiandae, reprehenderit pariatur distinctio hic aliquam adipisci eligendi iusto vel
                                    repellat. Nisi necessitatibus, rerum illo quibusdam perferendis ut, vel nesciunt quam culpa accusamus
                                    at. Fugiat, ad maxime?
                                </p>
                            </div>
                        </div>
                        <div className="p-3 col-md-4 col-lg-3 col-sm-5 col-5 d-flex justify-content-center align-items-center sticky-top "
                            style={{ maxHeight: "298px" }}>
                            <img src={card6} className="img-fluid rounded-3 " alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
        </>
    );
}

export default Cards;
