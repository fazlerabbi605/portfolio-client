import React from "react";
import TestimonialCardSlider from "../TestimonialCardSlider/TestimonialCardSlider";



const Testimonial = () => {
  return (
    <div className="mt-5 mb-5 pt-4 pb-5 bg-light">
      <h6 className="text-center text-dark font-weight-bold">TESTIMONIAL</h6>
      <div className="row w-100 mt-5 mb-5 d-flex align-items-center">
        <div className="col-md-5 p-5 offset-md-1">
          <h2 className="text-primary font-weight-bold"> CUSTOMERS REVIEWS </h2>
          <h6 className="text-secondary mt-5 mb-5">
            If you’re still unsure of our commitment, you can just ask our past
            customers. Their kind words have helped keep us in the logo design
            business for 20 years!
          </h6>
          <button className="btn btn-primary font-weight-bold">See All Review</button>
        </div>
        <div className="col-md-5 p-3">
            <TestimonialCardSlider></TestimonialCardSlider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
