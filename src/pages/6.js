// Article.js

import React from 'react';
import './1.css';
import One from '../components/images/6.jpg';

const Article = () => {
  return (
    <div className="article-container">
      <div className='article-conatiner2'>
      <div className="article-cover1">
      <h1 className="article-title">NEED FOR BATTERY RECYCLING</h1>
      <img
        src={One}// Replace with actual image URL
        alt="Article Cover"
        className="article-cover"
      />
      </div>
      <div className="article-content">
        <p>
        Battery recycling is a critical process that plays a significant role in reducing the environmental impact of batteries. Batteries are an essential part of our daily lives, powering everything from smartphones and laptops to electric vehicles and renewable energy storage. However, batteries contain harmful materials such as lead, mercury, cadmium, and lithium that can pollute the environment if not disposed of properly.<br/>
Battery recycling involves collecting used batteries and extracting valuable metals and chemicals from them. These materials can then be used to make new batteries or other products, reducing the need for mining and manufacturing new materials. Additionally, recycling prevents toxic materials from being released into the environment, reducing the risk of pollution and health hazards. <br/>
Not only does battery recycling reduce the environmental impact of batteries, but it also has economic benefits. Many of the metals and chemicals extracted from used batteries can be sold as raw materials, creating new business opportunities in the recycling industry. <br/>
By reducing the need for mining and manufacturing new materials, battery recycling can help reduce carbon emissions and save resources. It also reduces landfill waste, which is a growing concern in many countries. <br/>
It's essential for businesses and individuals to understand the importance of battery recycling and take steps to dispose of their used batteries properly. By doing so, we can create a sustainable future and preserve our planet for future generations. <br/>

        </p>
        {/* Add more content as needed */}
      </div>
      </div>
    </div>
  );
};

export default Article;
