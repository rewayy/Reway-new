import React from 'react';
import './aboutus.css'; 
import backgroundVideo from '../src/video.mp4'; 


function AboutUs() {
  return (
    <div className="about-us-container">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-container">
    
        <div className="text-container">
          <p className="text-blk headingText">
          </p>
          <p className="text-blk subHeadingText">
          One Earth. One Family. One Future
          </p>
          <p className="text-blk description">
          We are committed to leading the world towards a cleaner and sustainable future. 
          </p>
          <a className="explore">
            View Services
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;





