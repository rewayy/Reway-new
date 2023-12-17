// Article.js

import React from 'react';
import './1.css';
import One from '../components/images/3.jpg';

const Article = () => {
  return (
    <div className="article-container">
      <div className='article-conatiner2'>
      <div className="article-cover1">
      <h1 className="article-title">IMPORTANCE OF CIRCULAR ECONOMY IN THE E-WASTE INDUSTRY</h1>      
   <img
        src={One}// Replace with actual image URL
        alt="Article Cover"
        className="article-cover"
      />
      </div>
      <div className="article-content">
        <p>
        Millions of electronic items are made, used, and discarded in India daily. These electronic items produce a significant amount of toxic e-waste that pollutes the environment. <br/>

To address this issue, it is crucial to switch from the conventional linear model of production and consumption to a circular economy model. This means that electronic devices should be created to be reused and recycled, and they should be recycled safely and ethically. <br/>

By offering a method for the secure collection and disposal of e-waste, reverse logistics plays a significant part in the circular economy paradigm. E-waste must be transported, collected, and recycled into usable components as part of reverse logistics. This lessens the quantity of electronic trash that is dumped in landfills. and helps to conserve energy and resources. <br/>
<br/>
Raising awareness about the importance of reverse logistics and the circular economy model in the e-waste industry is important.

        </p>
        {/* Add more content as needed */}
      </div>
      </div>
    </div>
  );
};

export default Article;
