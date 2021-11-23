import React from "react";
import Typical from 'react-typical';
import "./Profile.css";

export default function Profile() {
  return (
    <div>
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="hero-container" data-aos="fade-in">
      <h1>GlamByAmberBava</h1>
      <Typical
loop={Infinity}
steps={[
    "Certified Makeup Artist",
    3000,
    "Certified Hair Artist",
    3000,
    "Specialize in Bridal",
    3000,
    "Atlanta Makeup Artist",
    3000,  
   ]}
/>
    </div>
  </section>
    </div>          
  );
}
