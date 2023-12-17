// Article.js

import React from 'react';
import './1.css';
import One from '../components/images/5.jpg';

const Article = () => {
  return (
    <div className="article-container">
      <div className='article-conatiner2'>
      <div className="article-cover1">
      <h1 className="article-title">Electronic Waste ke baare mai koi sochta bhi hai iss desh mai?</h1>
      
      <img
        src={One}// Replace with actual image URL
        alt="Article Cover"
        className="article-cover"
      />
      </div>
      <div className="article-content">
        <p>
        "Electronic Waste ke baare mai koi sochta bhi hai iss desh mai?", is the first question everyone asks when we talk about electronic waste to them. <br/>
Today we want to talk about the rules introduced by Bharat Sarkar and more specifically about the Electronic Waste Management Rules 2016 issued by the Central Pollution Control Board (CPCB) of India. Everyone should know about these rules and not just people related to this field. <br/>
The purpose of this regulation is to regulate the generation, storage, transportation, processing and dis	posal of electronic waste in an environmentally friendly manner. They apply to all electronic manufacturers, retailers, restorers and recyclers, and consumers who produce electronic waste.  <br/>
The Regulations require manufacturers to adopt an Extended Producer Responsibility (EPR) framework, which means that they are responsible for the collection and environmentally safe disposal of their products at the end of their useful life. This is a crucial step to ensure that e-waste is managed sustainably and does not pollute our environment.  <br/>
 The regulation also stipulates that all electronic waste sites must obtain a permit from the Pollution Control Board and follow the instructions given by the RTA. These guidelines include the use of appropriate techniques for handling and disposing of electronic waste, as well as measures to prevent the release of hazardous substances into the environment. <br/>
As responsible citizens and professionals, we must ensure that we do our part in the sustainable management of e-waste. By following the 2016 e-waste management rules, 
<br/>
we can help reduce the negative impact of e-waste on our environment and help build a cleaner and healthier planet. 
Let's do everything together to create a sustainable future for future generations. 

        </p>
        {/* Add more content as needed */}
      </div>
      </div>
    </div>
  );
};

export default Article;
