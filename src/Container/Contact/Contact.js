import React from "react";
import "./Contact.css";

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

        </div>

      </div>

      <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
        <form action="/action_page.php" method="POST" role="form" className="php-email-form">
          <div className="row">
            <div className="form-group col-md-6">
              <label for="name">Your Name</label>
              <input type="text" name="name" className="form-control" id="name" required/>
            </div>
            <div className="form-group col-md-6">
              <label for="name">Your Email</label>
              <input type="email" className="form-control" name="email" id="email" required/>
            </div>
          </div>
          <div className="form-group">
            <label for="name">Subject</label>
            <input type="text" className="form-control" name="subject" id="subject" required/>
          </div>
          <div className="form-group">
            <label for="name">Message</label>
            <textarea className="form-control" name="message" rows="10" required></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading...</div>
            <div className="error-message">Try Again!</div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>          
  );
}