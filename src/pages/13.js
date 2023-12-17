// Article.js

import React from 'react';
import './1.css';
import One from '../components/images/13.jpg';

const Article = () => {
  return (
    <div className="article-container">
      <div className='article-conatiner2'>
      <div className="article-cover1">
      <h1 className="article-title">🌿🌟India's Green Credits Programme: Empowering Change in Electronic Waste Management! 🌟🌿</h1>
      
      <img
        src={One}// Replace with actual image URL
        alt="Article Cover"
        className="article-cover"
      />
      </div>
      <div className="article-content">
        <p>
        Hey eco-warriors and sustainability enthusiasts! 🌎 Are you ready to make a significant impact on the environment while contributing to a greener India? Well, look no further because today, we're diving into the exciting world of the "Green Credits Programme" introduced by the Ministry of Environment, Forest and Climate Change, Government of India in the year 2023. <br/>

🍃 What is the Green Credits Programme?<br/>
The Green Credits Programme is a groundbreaking initiative introduced by the Government of India, aimed at encouraging and rewarding eco-friendly practices in various sectors. This brilliant scheme serves as a catalyst for positive change, promoting sustainable living and responsible waste management. <br/>

🔧 Green Credits in Electronic Waste Management Industry:<br/>
One of the most crucial aspects of the Green Credits Programme lies in its impact on the electronic waste management industry. As technology continues to advance rapidly, electronic waste (e-waste) has become a major environmental challenge. E-waste contains harmful elements like lead, mercury, and cadmium, which can leach into soil and water, posing severe threats to both human health and the ecosystem. <br/>

💡 How does it work?<br/>
Under this eco-conscious initiative, electronic waste recyclers and responsible producers of electronic products can earn Green Credits based on their environmentally friendly practices. These practices include proper recycling and disposal of e-waste, reducing hazardous materials in electronic products, and implementing energy-efficient designs. By earning Green Credits, companies receive incentives and recognition, further encouraging them to adopt sustainable measures. <br/>

👥 The Power of Collaboration:<br/>
The Green Credits Programme fosters collaboration between government agencies, private enterprises, and consumers. By working together, we can create a greener, healthier environment for future generations. As consumers, we play a pivotal role in this journey by choosing eco-friendly products and supporting responsible e-waste recycling. <br/>

🌟 Benefits of the Green Credits Programme: <br/>
✅ Reduction in hazardous waste: By promoting safe e-waste disposal, we can prevent hazardous materials from polluting our surroundings. <br/>
✅ Energy conservation: Encouraging energy-efficient electronic product designs leads to reduced energy consumption, helping combat climate change.<br/>
✅ Technological innovation: The programme stimulates innovation in eco-friendly technologies, driving the industry towards sustainable practices. <br/>

🌱 Be the Change: Get Involved!<br/>
Embracing the Green Credits Programme is not just a government initiative; it's a movement driven by passionate individuals like YOU! 🙌 Let's make conscious choices, support responsible brands, and demand greener products. Together, we can safeguard our planet and create a sustainable future. <br/>

        </p>
        {/* Add more content as needed */}
      </div>
      </div>
    </div>
  );
};

export default Article;
