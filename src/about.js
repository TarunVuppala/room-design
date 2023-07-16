import React from 'react';

function About() {
  return (
    <div style={{ marginTop: '60px' }}>
      <div className="container-fluid m-0 mb-2 p-2 pt-0">
        <p className="h4 display-5 m-0 d-flex align-items-center" style={{ height: '250px' }}>
          About Us
        </p>
      </div>
      <div>
        <div className="container">
          <div className=" p-1 m-2">
            <p className="fs-3 display-4 text-success ">
              Our Motto
            </p>
            <p className="ps-1">We strive to deliver excellence in every project we undertake. Our motto is to exceed our clients' expectations by providing innovative solutions, impeccable craftsmanship, and exceptional service. We believe in the power of design to transform spaces and enhance lives. We are dedicated to creating inspiring and functional designs that make a lasting impact.
            </p>
          </div>
        </div>
        <div className="container">
          <div className=" p-1 m-2">
            <p className="fs-3 display-4 text-warning ">
              Our Team
            </p>
            <p className="ps-1">Our team is comprised of passionate individuals who are experts in their respective fields. We bring together diverse talents, skills, and perspectives to create a collaborative and dynamic work environment. With a shared commitment to excellence, we bring our clients vision into reality. Together, we strive to deliver designs that not only meet but exceed expectations, ensuring complete satisfaction and delight.
            </p>
          </div>
        </div>
        <div className="container">
          <div className=" p-1 m-2">
            <p className="fs-3 display-4 text-danger ">
              Services
            </p>
            <p className="ps-1">
              Our comprehensive range of services are designed to cater to all your design needs. From conceptualization and planning to execution and installation, we offer end-to-end solutions that ensure a seamless and hassle-free experience.
            </p>
          </div>
        </div>
        <div className="container">
          <div className=" p-1 m-2">
            <p className="fs-3 display-4 text-primary ">
              Products
            </p>
            <p className="ps-1">
              We curate a collection of high-quality products that are sourced from trusted manufacturers. Our product offerings include furniture, lighting, accessories, fixtures, and more, all carefully selected to meet the highest standards of design and craftsmanship.You can coutomise any product according to yor requirement and we will deliver it. With a focus on both aesthetics and functionality, we ensure that our products enhance your space and contribute to a comfortable and inspiring environment. Explore our range of products to find the perfect pieces for your space.
            </p>
          </div>
        </div>
        <div className="container">
          <div className=" p-1 m-2">
            <p className="fs-3 display-4 text-secondary ">
              Gallery
            </p>
            <p className="ps-1">
              Take a glimpse into our portfolio of completed projects. Our gallery showcases the diverse range of designs we have created for residential and commercial spaces. From contemporary and modern styles to traditional and eclectic designs, each project is a testament to our creativity and attention to detail. Browse through the gallery to gather inspiration for your own project and see the possibilities that await you when you choose us as your design partner.
            </p>

            <div className="" style={{ height: 'auto' }}>
              {/* Photo Grid */}
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {/* Photo Grid */}
                <div className="col">
                  <div className="card">
                    <img src="./Images/key1.jpg" className="card-img-top" alt="gallery" />
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src="./Images/key2.jpg" className="card-img-top" alt="gallery" />
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src="./Images/key3.jpg" className="card-img-top" alt="gallery" />
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src="./Images/key4.jpg" className="card-img-top" alt="gallery" />
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src="./Images/key5.jpg" className="card-img-top" alt="gallery" />
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src="./Images/key6.jpg" className="card-img-top" alt="gallery" />
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src="./Images/key7.jpg" className="card-img-top" alt="gallery" />
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src="./Images/key8.jpg" className="card-img-top" alt="gallery" />
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src="./Images/key9.jpg" className="card-img-top" alt="gallery" />
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src="./Images/key10.jpg" className="card-img-top" alt="gallery" />
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src="./Images/key11.jpg" className="card-img-top" alt="gallery" />
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src="./Images/key12.jpg" className="card-img-top" alt="gallery" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;