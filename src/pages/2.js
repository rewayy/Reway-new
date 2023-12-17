// Article.js

import React from 'react';
import './1.css';
import One from '../components/images/2.jpg';

const Article = () => {
  return (
    <div className="article-container">
      <div className='article-conatiner2'>
      <div className="article-cover1">
      <h1 className="article-title">Electronic Waste Management in India</h1>
      
      
      <img
        src={One}// Replace with actual image URL
        alt="Article Cover"
        className="article-cover"
      />
      </div>
      
      <div className="article-content">
        <p>
        Electronic Waste, or E-waste, is the collective term for electronic products and components that are no longer fit for use due to obsolescence, damage, or other factors. India is one of the fastest-growing countries in the world in terms of electronic waste, and managing this waste is becoming an increasingly pressing issue.<br/>

India's primary sources of e-waste are households, industries, and bulk waste importers. Households account for the majority of e-waste generated, with nearly 80% of all e-waste coming 
from this sector. This is due to the rapid increase in the ownership of electronic products and components in India. <br/>

To effectively manage the e-waste generated in India, a proper e-waste management system needs to be in place. The first step in this process is to identify and segregate the different types of e-waste. Once the e-waste is segregated, it can be recycled or disposed of safely and responsibly. <br/>

The Indian government is taking several initiatives to promote proper e-waste management in the country. The Ministry of Electronics and Information Technology (MEITY) has created the National E-waste Management Policy and Rules, which provides guidance on e-waste management. The government is also providing guidance and support to the private sector to establish collection, storage, and recycling centres for e-waste. <br/>

E-waste management is still a challenge in India. Still, with the right policy measures and public awareness campaigns, it is possible to create a sustainable model for managing this waste. With the right initiatives, India can become an example of responsible e-waste management. <br/>

        </p>
        {/* Add more content as needed */}
      </div>
      </div>
    </div>
  );
};

export default Article;
