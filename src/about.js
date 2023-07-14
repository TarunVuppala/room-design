import React from 'react';

function About() {
  return (
    <div>
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
            <p className="ps-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe mollitia maiores laudantium tempore ullam exercitationem vero minima officiis reiciendis voluptates suscipit pariatur nobis atque debitis autem, odit maxime numquam illo dolore cumque odio culpa possimus. Sapiente non distinctio amet, est nemo beatae deserunt. Labore quidem quam reprehenderit magni quisquam saepe. </p>
          </div>
        </div>
        <div className="container">
          <div className=" p-1 m-2">
            <p className="fs-3 display-4 text-warning ">
              Our Team
            </p>
            <p className="ps-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, tempora ex magnam dignissimos veritatis dolore velit voluptas impedit, unde quam placeat quod necessitatibus consequatur reprehenderit quis sequi asperiores nemo sunt dolor vero. Ea quis tempora sint et maiores ipsam, non magnam iusto. Perferendis provident asperiores tempore officia vero repellat voluptate?
            </p>
          </div>
        </div>
        <div className="container">
          <div className=" p-1 m-2">
            <p className="fs-3 display-4 text-danger ">
              Services
            </p>
            <p className="ps-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima hic rerum fugit, quibusdam neque, exercitationem distinctio deleniti porro repellat tenetur, expedita blanditiis error. Aperiam sunt, iusto ratione veritatis ducimus eius provident totam deleniti laudantium doloribus quia, distinctio officiis incidunt dicta! Aperiam, illum dicta. Ex recusandae reprehenderit voluptatum similique in.
            </p>
          </div>
        </div>
        <div className="container">
          <div className=" p-1 m-2">
            <p className="fs-3 display-4 text-primary ">
              Products
            </p>
            <p className="ps-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt dolor maiores cupiditate officiis qui inventore cum mollitia nulla libero alias porro, magnam sequi ex fuga nobis, aliquid nam enim. Ad consequatur fuga animi, nesciunt omnis odio repudiandae ut iusto! Accusamus, illo quae odio dicta rem officia nemo atque laudantium omnis.
            </p>
          </div>
        </div>
        <div className="container">
          <div className=" p-1 m-2">
            <p className="fs-3 display-4 text-secondary ">
              Gallery
            </p>
            <p className="ps-1">
              These are some example pictures.
            </p>

            <div className="" style={{ height: 'auto' }}>
              {/* Photo Grid */}
              <div className="row">
                <div className="col-4">
                  <img src="./Images/key1.jpg" style={{ width: '100%' }} alt="gallery" />
                  <img src="./Images/key2.jpg" style={{ width: '100%' }} alt="gallery" />
                  <img src="./Images/key3.jpg" style={{ width: '100%' }} alt="gallery" />
                  <img src="./Images/key4.jpg" style={{ width: '100%' }} alt="gallery" />
                </div>
                <div className="col-4">
                  <img src="./Images/key5.jpg" style={{ width: '100%' }} alt="gallery" />
                  <img src="./Images/key6.jpg" style={{ width: '100%' }} alt="gallery" />
                  <img src="./Images/key7.jpg" style={{ width: '100%' }} alt="gallery" />
                  <img src="./Images/key8.jpg" style={{ width: '100%' }} alt="gallery" />
                </div>
                <div className="col-4">
                  <img src="./Images/key9.jpg" style={{ width: '100%' }} alt="gallery" />
                  <img src="./Images/key1.jpg" style={{ width: '100%' }} alt="gallery" />
                  <img src="./Images/key12.jpg" style={{ width: '100%' }} alt="gallery" />
                  <img src="./Images/key11.jpg" style={{ width: '100%' }} alt="gallery" />
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