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
                                <Link to='/' className="text-decoration-none text-primary h5">Bringing your room into life.
                                </Link>
                                <p className="py-1 px-3">
                                Experience the transformation of your room with our exceptional design services. We specialize in creating captivating and personalized designs that breathe new life into your space. From selecting the perfect color palette to arranging furniture and decor, we pay meticulous attention to detail to create a harmonious and inviting environment. Let us turn your vision into reality and create a room that reflects your unique style and personality.
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
                                <Link to='/' className="text-decoration-none text-primary h5">Designs for everyone.
                                </Link>
                                <p className="py-1 px-3">
                                Discover a world of design possibilities with our wide range of options. Whether you prefer contemporary minimalism or bold and vibrant styles, we have designs that cater to every taste. Our talented designers constantly push the boundaries of creativity to bring you fresh and inspiring designs. Explore our collection and find the perfect design to express your individuality and make a statement in your space.
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
                                <Link to='/' className="text-decoration-none text-primary h5">Customize all elements.
                                </Link>
                                <p className="py-1 px-3">
                                Personalize every element of your interior design to create a space that truly reflects your style. From choosing colors and materials to customizing furniture and accessories, we provide the tools and expertise to bring your unique vision to life. Embrace your individuality and create a space that is uniquely yours.
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
                                <Link to='/' className="text-decoration-none text-primary h5">Providing assistance and inspiration.
                                </Link>
                                <p className="py-1 px-3">
                                Let us take care of all your design needs with our comprehensive services. We provide a seamless integration of all the features you need for your website. Whether it's smart home integration, audiovisual systems, or connecting with other platforms and technologies, we have the expertise to make it happen. Enjoy the convenience and efficiency of a fully integrated space tailored to your requirements.
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
                                <Link to='/' className="text-decoration-none text-primary h5">Budget planning.
                                </Link>
                                <p className="py-1 px-3">
                                Customize your design within your desired budget range. We provide a wide range of options for you to choose from, allowing you to select the elements that fit your budget. Whether you have a modest budget or are looking for luxury options, we can accommodate your needs. Simply specify your budget range, and we will show you the available options within that range, ensuring that you can create your dream space without compromising on quality.
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
                                <Link to='/' className="text-decoration-none text-primary h5">Integration with other platforms.
                                </Link>
                                <p className="py-1 px-3">
                                Seamlessly integrate your space with other platforms and technologies. From smart home features to IoT devices, we have the expertise to make it happen. Stay connected and enjoy the convenience and efficiency of a fully integrated space. Let us enhance your lifestyle with our integration services.
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
