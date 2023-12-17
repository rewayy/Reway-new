// Article.js

import React from 'react';
import './1.css';
import One from '../components/images/1.jpg';

const Article = () => {
  return (
    <div className="article-container">
      <div className='article-conatiner2'>
      <div className="article-cover1">
      <h1 className="article-title">The Hazards of Electronic Waste</h1>
      <img
        src={One}// Replace with actual image URL
        alt="Article Cover"
        className="article-cover"
      />
      </div>
      <div className="article-content">
        <p>
        In recent years, Electronic waste, or e-waste, has become a primary environmental concern as more and more electronic products enter the waste stream. But what makes e-waste so dangerous?

E-waste contains various hazardous materials, including lead, mercury, cadmium, and arsenic, that can be released into the environment if not disposed of properly. These hazardous materials can have a wide range of adverse effects on human health and the environment, including neurological damage, respiratory problems, impaired kidney function, and reproductive problems.

The disposal of e-waste can also have a significant impact on the environment. Improper disposal of e-waste often results in the release of hazardous materials into the air, water, and soil. This can lead to pollution and contamination of food and water sources, increasing the risk of human exposure to toxins.

E-waste can also contain valuable materials, such as gold, silver, copper, and palladium, which can be recovered through recycling and reused in new products. This reduces the need for mining and helps conserve natural resources.

E-waste must be disposed off responsibly to protect both human health and the environment. Proper disposal methods include recycling, reusing, and reducing e-waste. It is also important to be aware of the hazards associated with e-waste and to take steps to reduce our consumption of electronic products.

        </p>
        {/* Add more content as needed */}
      </div>
    </div>
    </div>
  );
};

export default Article;
