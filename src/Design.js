import React from 'react';
import { Link } from 'react-router-dom';

function Design() {
    return (
        <>
            <div className="container-fluid bord border-dark rounded m-5 p-3 w-auto ">
                <div className="card-body">
                    <h5 className="card-title mb-2 p-2 display-5">
                        Design Your Room Here
                    </h5>
                    <p className="card-text lead">
                        SomeTxt Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illum et,
                        quas in a debitis tempore, sapiente modi dolores soluta neque maiores quo officia optio rerum. Dignissimos
                        eveniet autem libero explicabo provident ad, odio a maiores aspernatur consequuntur molestias ullam similique
                        quis sapiente, consequatur necessitatibus doloremque officia. Et, maxime ut!
                    </p>
                    <div className="d-flex justify-content-end align-items center mt-5 ">
                        <Link to="/contact" className="btn btn-outline-success text-dark fw-bold mx-2">
                            Tutorial
                        </Link>
                        <Link to="/roomDesigning" className="btn btn-outline-primary text-dark fw-bold mx-2">
                            Room Designing
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Design;
