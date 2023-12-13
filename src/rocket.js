import React from 'react';
import '../src/rocket.css';

function NewComponent() {
  const gifUrl = 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*TP2EU8KyIxct_-zTfnG4WQ.gif'; // Replace with the direct URL of your GIF

  return (
    <section name="rocket" id="home">
      <div className="new-component-container">
        <div className="content-container">
          <div className="text-container">
            <p className="rocket-txt">
              At Reway, innovation thrives every day, breathing life into fresh ideas.
            </p>
            <p className="rocket-txt-small">
              Our team continuously explores new horizons, pushing boundaries to create a sustainable and inclusive impact in the E-Waste Management ecosystem
            </p>
            <img src={gifUrl} alt="Rocket GIF" className="rocket-gif" />
            <a className='rocket-txt-blog'>
              To know more <br />
              read our blogs.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewComponent;
