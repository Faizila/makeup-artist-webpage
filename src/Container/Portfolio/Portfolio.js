import React from "react";
import "./Portfolio.css";
import soon from '../../Images/coming-soon.png';

export default function Portfolio() {
  return (
    <div>
<section id="gallery" className="portfolio section-bg">
  <div className="container">

    <div className="section-title">
      <h2>Gallery</h2>
    </div>

    <div className="row portfolio-container">

    <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src={soon} class="img-fluid" alt="logo" width="75%" height="75%"/>
          <div className="portfolio-links">
            <a href={soon}><i className="bx bx-plus"></i></a>
            <a href="#" target="blank"><i className="bx bx-link"></i></a>
            </div>
            <div>
            <p>Coming Soon!</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src={soon} class="img-fluid" alt="logo" width="75%" height="75%"/>
          <div className="portfolio-links">
            <a href={soon}><i className="bx bx-plus"></i></a>
            <a href="#" target="blank"><i className="bx bx-link"></i></a>
            </div>
            <div>
            <p>Coming Soon!</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src={soon} class="img-fluid" alt="logo" width="75%" height="75%"/>
          <div className="portfolio-links">
            <a href={soon}><i className="bx bx-plus"></i></a>
            <a href="#" target="blank"><i className="bx bx-link"></i></a>
            </div>
            <div>
            <p>Coming Soon!</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src={soon} class="img-fluid" alt="logo" width="75%" height="75%"/>
          <div className="portfolio-links">
            <a href={soon}><i className="bx bx-plus"></i></a>
            <a href="#" target="blank"><i className="bx bx-link"></i></a>
            </div>
            <div>
            <p>Coming Soon!</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src={soon} class="img-fluid" alt="logo" width="75%" height="75%"/>
          <div className="portfolio-links">
            <a href={soon}><i className="bx bx-plus"></i></a>
            <a href="#" target="blank"><i className="bx bx-link"></i></a>
            </div>
            <div>
            <p>Coming Soon!</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src={soon} class="img-fluid" alt="logo" width="75%" height="75%"/>
          <div className="portfolio-links">
            <a href={soon}><i className="bx bx-plus"></i></a>
            <a href="#" target="blank"><i className="bx bx-link"></i></a>
            </div>
            <div>
            <p>Coming Soon!</p>
          </div>
        </div>
      </div>

      </div>

  </div>
</section>
    </div>          
  );
}