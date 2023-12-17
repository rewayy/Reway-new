// Article.js

import React from 'react';
import './1.css';
import One from '../components/images/12.jpg';

const Article = () => {
  return (
    <div className="article-container">
      <div className='article-conatiner2'>
      <div className="article-cover1">
      <h1 className="article-title">Join the Journey of Electronic Waste: From Disposal to Recycling </h1>
      
      <img
        src={One}// Replace with actual image URL
        alt="Article Cover"
        className="article-cover"
      />
      </div>
      <div className="article-content">
        <p>
        In a world where technology plays a significant role, understanding the journey of electronic waste (e-waste) is vital for a sustainable future. Here's a brief overview of the stages e-waste goes through: <br/>

1. Disposal: Responsibly part ways with old devices instead of discarding them in the regular trash. ♻️ <br/>
 
2. Collection: Take advantage of collection centres and recycling programs for convenient drop-off locations. 🏢 <br/>

3. Sorting and Categorization: Skilled technicians and automation systems sort and categorize e-waste for proper handling. 🧩 <br/>

4. Data Destruction: Certified methods are used to remove personal data from devices to protect privacy securely. 🔒 <br/>

5. Refurbishment and Reuse: Functional devices are refurbished, extending their lifespan for donation or resale. 🔄 <br/>

6. Recycling and Material Recovery: Advanced techniques extract valuable materials like metals and plastics from non-reusable components. ♻️💎 <br/>

7. Responsible Disposal: Proper disposal ensures compliance with environmental regulations and prevents pollution. 🌍 <br/>

By actively participating in responsible e-waste management, we can positively impact the environment. Let's support recycling initiatives, promote refurbishment and reuse, and raise awareness about sustainable electronic consumption. Together, we can create a greener future! 🌱 <br/>

        </p>
        {/* Add more content as needed */}
      </div>
    </div>
    </div>
  );
};

export default Article;
