import React from 'react';

function FAQPage() {
  return (
    <>
      <div className="container-fluid m-0 mb-2 p-2 pt-0" style={{ marginTop: '60px' }}>
        <p className="h4 display-5 m-0 d-flex align-items-center" style={{ height: '250px' }}>Frequently Asked Questions</p>
      </div>
      <div className="container mb-4">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button className="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                What payment methods do you accept?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
              <div className="accordion-body">
                <p>
                  We accept major credit cards and bank transfers for payment.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button className="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                How long does shipping usually take?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
              <div className="accordion-body">
                <p>
                  Our standard shipping time is 3-5 business days within the country. International shipping may take longer depending on the destination.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button className="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Can I return or exchange a product?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
              <div className="accordion-body">
                <p>
                  Yes, we have a 30-day return policy. If you are not satisfied with your purchase, you can return or exchange the product within 30 days of receiving it.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
              <button className="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{ outline: 'none' }}>
                Do you offer discounts for bulk orders?
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
              <div className="accordion-body">
                <p>
                  Yes, we provide discounts for bulk orders. Please contact our sales team for more information and pricing details.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingFive">
              <button className="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                How can I track my order?
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
              <div className="accordion-body">
                <p>
                  Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track the progress of your shipment on our website.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingSix">
              <button className="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                Are the products covered by a warranty?
              </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
              <div className="accordion-body">
                <p>
                  Yes, all our products come with a standard one-year warranty against manufacturing defects. Please contact our customer support for warranty claims and assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQPage;
