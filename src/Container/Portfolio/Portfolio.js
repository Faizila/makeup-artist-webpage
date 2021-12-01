import React from "react";
import "./Portfolio.css";
import soon from '../../Images/coming-soon.png';
import img3 from '../../Images/img3.JPG';
import img4 from '../../Images/img4.JPG';
import img5 from '../../Images/img5.JPG';
import img6 from '../../Images/img6.JPG';
import img7 from '../../Images/img7.JPG';
import img10 from '../../Images/img10.JPG';

export default function Portfolio() {
  return (
    <div>
<section id="gallery" className="portfolio section-bg">
  <div className="container">

    <div className="section-title">
      <h2>Gallery</h2>
      <a href="https://www.facebook.com/GlamByAmberBava" className="facebook" target="blank"><i className="bx bxl-facebook"></i></a>
      <a href="https://www.instagram.com/glambyamberbava" className="instagram" target="blank"><i className="bx bxl-instagram"></i></a>
    </div>

    <div className="row portfolio-container">

    <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src={img3} class="img-fluid" alt="logo" width="75%" height="75%"/>
          <div className="portfolio-links">
            <a href={img3}><i className="bx bx-plus"></i></a>
            <a href="https://www.facebook.com/GlamByAmberBava" target="blank"><i className="bx bx-link"></i></a>
            </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src={img4} class="img-fluid" alt="logo" width="75%" height="75%"/>
          <div className="portfolio-links">
            <a href={img4}><i className="bx bx-plus"></i></a>
            <a href="https://www.instagram.com/glambyamberbava/" target="blank"><i className="bx bx-link"></i></a>
            </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src={img5} class="img-fluid" alt="logo" width="75%" height="75%"/>
          <div className="portfolio-links">
            <a href={img5}><i className="bx bx-plus"></i></a>
            <a href="https://www.facebook.com/GlamByAmberBava" target="blank"><i className="bx bx-link"></i></a>
            </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src={img6} class="img-fluid" alt="logo" width="75%" height="75%"/>
          <div className="portfolio-links">
            <a href={img6}><i className="bx bx-plus"></i></a>
            <a href="https://www.instagram.com/glambyamberbava/" target="blank"><i className="bx bx-link"></i></a>
            </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src={img7} class="img-fluid" alt="logo" width="75%" height="75%"/>
          <div className="portfolio-links">
            <a href={img7}><i className="bx bx-plus"></i></a>
            <a href="https://www.facebook.com/GlamByAmberBava" target="blank"><i className="bx bx-link"></i></a>
            </div>
             </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src={img10} class="img-fluid" alt="logo" width="75%" height="75%"/>
          <div className="portfolio-links">
            <a href={img10}><i className="bx bx-plus"></i></a>
            <a href="https://www.instagram.com/glambyamberbava/" target="blank"><i className="bx bx-link"></i></a>
            </div>
        </div>
      </div>

      </div>

  </div>
</section>
    </div>          
  );
}