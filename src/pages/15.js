// Article.js

import React from 'react';
import './1.css';
import One from '../components/images/15.jpg';
import Navbar from '../navbar';

const Article = () => {
  return (
    <div className="article-container">
      <div className='article-conatiner2'>
      <div className="article-cover1">
      <h1 className="article-title"> Reducing Electronic Waste Starts at Home and the Office </h1>
 
      <img
        src={One}// Replace with actual image URL
        alt="Article Cover"
        className="article-cover"
      />
      </div>
      <div className="article-content">
        <p>
        As champions of sustainability, we believe that every small effort counts when it comes to reducing electronic waste. 🌍💚 <br/>
Here are some SIMPLE yet EFFECTIVE techniques that you can implement in your homes and offices to make a BIG difference:<br/>
Extend the Lifespan: Before rushing to replace a device, consider if it can be repaired or upgraded to meet your needs. A little maintenance can go a long way!<br/>

Responsible Disposal: When it's truly time to say goodbye to old electronics, ensure they are properly recycled or donated. 🔄 <br/>

Buy Refurbished: Opt for refurbished electronics when making a new purchase. They're often as good as new, save you money, and reduce e-waste. <br/>

Energy Efficiency: Set devices to power-saving modes and unplug chargers when not in use. Every bit of energy saved helps. <br/>

Digital Minimalism: Declutter your digital life. Delete unused apps, files, and emails to reduce storage needs and extend your device's lifespan. <br/>

Eco-Friendly Accessories: Choose eco-friendly phone cases and accessories made from sustainable materials. <br/>

Reusable Chargers: Invest in durable, high-quality charging cables and avoid the temptation of cheap, disposable ones. <br/>

Data Backups: Regularly back up your data to prevent data loss accidents that may lead to early device replacement. <br/>

Recycle Responsibly: Find local e-waste recycling centers or take part in community recycling drives. Ensure hazardous materials are disposed of safely. <br/>

Donate or Sell: Consider giving old electronics a second life by donating or selling them to someone who can use them. <br/>

Remember, even small steps add up to significant positive impacts on our environment. 🌏🌟 <br/>
Let's take these steps together, reduce electronic waste, and pave the way for a greener, more sustainable future. 💪💚 <br/>

        </p>
        {/* Add more content as needed */}
      </div>
    </div>
    </div>
  );
};

export default Article;
