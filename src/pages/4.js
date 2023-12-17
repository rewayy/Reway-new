// Article.js

import React from 'react';
import './1.css';
import One from '../components/images/4.jpg';

const Article = () => {
  return (
    <div className="article-container">
      <div className='article-conatiner2'>
      <div className="article-cover1">
      <h1 className="article-title">STEPS TAKEN BY THE INDIAN GOVERNMENT </h1>
      
      <img
        src={One}// Replace with actual image URL
        alt="Article Cover"
        className="article-cover"
      />
      </div>
      <div className="article-content">
        <p>
          
The Central Pollution Control Board (CPCB) of Bharat is taking steps to ensure the responsible management and disposal of electronic waste. The Electronic Waste (Management and Handling) Rules 2020 mandate the use of Extended Producer Responsibility (EPR) guidelines. <br/>


EPR guidelines require manufacturers, repairers, and bulk consumers to ensure that their e-waste is disposed of safely and responsibly. This helps to reduce the environmental and health risks posed by e-waste, which is often full of toxic materials like lead, cadmium, and mercury. <br/>

<br/>
At Reway, we are committed to help Bharat achieve its goal of becoming a global leader in the circular economy and aligning with the United Nation's Sustainable Development Goals (SDGs) and let Bharat achieve its vision of Net Zero Carbon Emission by 2070.

        </p>
        {/* Add more content as needed */}
      </div>
      </div>
    </div>
  );
};

export default Article;
