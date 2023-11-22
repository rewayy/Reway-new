import React from 'react';
import '../src/rocket.css'; 

function NewComponent() {
  return (
    <div className="new-component-container">
      <div className="content-container">
        <img
          src={process.env.PUBLIC_URL + '/img.png'}
          alt="Rocket Launch"
          className="rocket-image"
        />
        <div className="text-container">
          <p className="rocket-txt">
            At Reway, innovation thrives every day, breathing life into fresh ideas.
          </p>
            
              <a className='rocket-txt-blog'>
                To know more <br />
                read our blogs.
              </a>
            
        </div>
      </div>
    </div>
  );
}

export default NewComponent;
