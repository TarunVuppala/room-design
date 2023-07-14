import React from 'react';

function FAQPage () {
  return (
    <>
      <div className="container-fluid m-0 mb-2 p-2 pt-0">
        <p className="h4 display-5 m-0 d-flex align-items-center" style={{ height: '250px' }}>Frequently Asked Questions</p>
      </div>
      <div className="container mb-4 accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button bg-light" type="button" data-bs-toggle="collapse"
              data-bs-target="#1" aria-expanded="true" aria-controls="1">
              <p className="m-0 p-0 text-dark">Question #1</p>
            </button>
          </h2>
          <div id="1" className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              <strong>The main answer in one line</strong>. This is the rest of the answer i.e. the description. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Placeat illum eaque pariatur voluptas dolor perferendis adipisci
              ratione perspiciatis nemo officiis sit aut dolorem culpa, ipsam, numquam quibusdam molestias quia eligendi!
              Praesentium vel eos laborum laudantium, ea ex veritatis fugit sapiente.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button bg-light" type="button" data-bs-toggle="collapse"
              data-bs-target="#2" aria-expanded="true" aria-controls="2">
              <p className="m-0 p-0 text-dark">Question #2</p>
            </button>
          </h2>
          <div id="2" className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              <strong>The main answer in one line</strong>. This is the rest of the answer i.e. the description. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Placeat illum eaque pariatur voluptas dolor perferendis adipisci
              ratione perspiciatis nemo officiis sit aut dolorem culpa, ipsam, numquam quibusdam molestias quia eligendi!
              Praesentium vel eos laborum laudantium, ea ex veritatis fugit sapiente.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button bg-light" type="button" data-bs-toggle="collapse"
              data-bs-target="#3" aria-expanded="true" aria-controls="3">
              <p className="m-0 p-0 text-dark">Question #3</p>
            </button>
          </h2>
          <div id="3" className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              <strong>The main answer in one line</strong>. This is the rest of the answer i.e. the description. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Placeat illum eaque pariatur voluptas dolor perferendis adipisci
              ratione perspiciatis nemo officiis sit aut dolorem culpa, ipsam, numquam quibusdam molestias quia eligendi!
              Praesentium vel eos laborum laudantium, ea ex veritatis fugit sapiente.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button bg-light" type="button" data-bs-toggle="collapse"
              data-bs-target="#4" aria-expanded="true" aria-controls="4">
              <p className="m-0 p-0 text-dark">Question #4</p>
            </button>
          </h2>
          <div id="4" className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              <strong>The main answer in one line</strong>. This is the rest of the answer i.e. the description. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Placeat illum eaque pariatur voluptas dolor perferendis adipisci
              ratione perspiciatis nemo officiis sit aut dolorem culpa, ipsam, numquam quibusdam molestias quia eligendi!
              Praesentium vel eos laborum laudantium, ea ex veritatis fugit sapiente.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
