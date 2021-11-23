import React from "react";
import "./Aboutme.css";
import pic from '../../Images/nav.jpg';

export default function Aboutme() {
  return (
    <div>
     <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About Me</h2>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={pic} alt="profile-pic" width="80%" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Atlanta Makeup Artist | Hair</h3>
        <br/>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Atlanta, Georgia USA</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Specialty:</strong> <span>Bridal Makeup/Hair</span></li>
                </ul>
              </div>
            </div>
            <br/>
            <div>
            <ul>
              <li>• Certified Atlanta Makeup/Hair Artist.</li>
              <li>• Excellent grasp of cosmetology with regard to makeup application.</li>
              <li>• Capable of comprehending ideas and integrating them into desired results.</li>
            </ul>
            </div>
        </div>

      </div>
      </div>  
    </section>
    </div>          
  );
}