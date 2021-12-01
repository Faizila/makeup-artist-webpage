import React from "react";
import "./Contact.css";
import pic from '../../Images/img9.JPG';

export default function Contact() {
  return (
    <div>
<section id="contact" className="contact">
  <div className="container">

    <div className="section-title">
    <h2>Contact</h2>
    <a href="https://www.facebook.com/GlamByAmberBava" className="facebook" target="blank"><i className="bx bxl-facebook"></i></a>
    <a href="https://www.instagram.com/glambyamberbava" className="instagram" target="blank"><i className="bx bxl-instagram"></i></a>
  </div>
    <div className="row" data-aos="fade-in">

      <div className="col-lg-5 d-flex align-items-stretch">
        <div className="info">

          <div className="email">
            <i className="bx bxs-envelope"></i>
            <h4>Email:</h4>
            <p>amberbava@gmail.com</p>
          </div>

          <div className="phone">
            <i className='bx bxs-phone'></i>
            <h4>Call:</h4>
            <p>+1 470 443 8380</p>
          </div> 

          <div className="facebook">
          <i className="bx bxl-facebook"></i>
            <h4>Facebook:</h4>
            <p>GlamByAmberBava</p>
          </div> 

          <div className="instagram">
          <i className="bx bxl-instagram"></i>
            <h4>Instagram:</h4>
            <p>GlamByAmberBava</p>
          </div>       

        </div>

      </div>

      <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
      <img src={pic} alt="Profile-Pic" width="80%"/>
      </div>
    </div>
  </div>
</section>
    </div>          
  );
}