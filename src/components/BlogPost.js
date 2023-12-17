// src/components/BlogPost.js
import React from 'react';
import './BlogPost.css';
import { Link } from "react-router-dom";

import one from './images/1.jpg';
import two from './images/2.jpg';
import three from './images/3.jpg';
import four from './images/4.jpg';
import five from './images/5.jpg';
import six from './images/6.jpg';
import seven from './images/7.jpg';
import eight from './images/8.jpg';
import nine from './images/9.jpg';
import ten from './images/10.jpg';
import eleven from './images/11.jpg';
import twelve from './images/12.jpg';
import thirteen from './images/13.jpg';
import fourteen from './images/14.jpg';
import fifteen from './images/15.jpg';

const BlogPost = () => {
  return (
    <div>
        
    <div className='container' style={{ marginTop: '70px' }}>
      {/* Box 1 */}
      <Link to='/One1' className='box_p' >
        <div className='box'>
          <img src={one} alt="Image 1" className='image_c' />
        </div>
        <div className='box-content'>
          <h2>The hazards of electronic waste</h2>
          <p className='link'> Electronic waste, or e-waste, has become a primary environmental concern as more and more electronic products enter the waste stream</p>
        </div>
      </Link>

      {/* Box 2 */}
      <Link to='/One2' className='box_p'>
        <div className='box'>
          <img src={two} alt="Image 2" className='image_c' />
        </div>
        <div className='box-content'>
          <h2>Electronic waste management in India</h2>
          <p className='link'>Electronic Waste, or E-waste, is the collective term for electronic products and components that are no longer fit for use due to obsolescence, damage, or other factors.</p>
        </div>
      </Link>

      {/* Box 3 */}
      <Link to='/One3' className='box_p'>
        <div className='box'>
          <img src={three} alt="Image 3" className='image_c' />
        </div>
        <div className='box-content'>
          <h2>Importance of circular economy in the e-waste industry</h2>
          <p className='link'>Millions of electronic items are made, used, and discarded in India daily.</p>
        </div>
      </Link>

      {/* Box 4 */}
      <Link to='/One4' className='box_p'>
        <div className='box'>
          <img src={four} alt="Image 4" className='image_c' />
        </div>
        <div className='box-content'>
          <h2>Steps taken by the Indian government to manage proper electronic waste disposal</h2>
          <p className='link'>The Central Pollution Control Board (CPCB) of Bharat is taking steps to ensure the responsible management and disposal of electronic waste.</p>
        </div>
      </Link>

      {/* Box 5 */}
      <Link to='/One5' className='box_p'>
        <div className='box'>
          <img src={five} alt="Image 5" className='image_c' />
        </div>
        <div className='box-content'>
          <h2>"Electronic waste ke baare mai koi sochta bhi hai iss desh mai?</h2>
          <p className='link'>, is the first question everyone asks when we talk about electronic waste to them.</p>
        </div>
      </Link>

      {/* Box 6 */}
      <Link to='/One6' className='box_p'>
        <div className='box'>
          <img src={six} alt="Image 6" className='image_c' />
        </div>
        <div className='box-content'>
          <h2>Need for battery recycling</h2>
          <p className='link'>Battery recycling is a critical process that plays a significant role in reducing the environmental impact of batteries.</p>
        </div>
      </Link>

      {/* Box 7 */}
      <Link to='/One7' className='box_p'>
        <div className='box'>
          <img src={seven} alt="Image 7" className='image_c' />
        </div>
        <div className='box-content'>
          <h2>🌍 The power of reducing carbon footprint: Boosting marketing and goodwill 🌱</h2>
          <p className='link'>In an era where sustainability has become a global imperative, aligning business practices with environmental responsibility not only helps protect our planet</p>
        </div>
      </Link>

      {/* Box 8 */}
      <Link to='/One8' className='box_p'>
        <div className='box'>
          <img src={eight} alt="Image 8" className='image_c' />
        </div>
        <div className='box-content'>
          <h2>🌍💡 E-Waste management: Unlocking economic opportunities!</h2>
          <p className='link'>Today, I want to shed light on a pressing global issue that not only affects our environment but also presents a tremendous opportunity for economic growth:</p>
        </div>
      </Link>

      {/* Box 9 */}
      <Link to='/One9' className='box_p'>
        <div className='box'>
          <img src={nine} alt="Image 9" className='image_c' />
        </div>
        <div className='box-content'>
          <h2>🌍💡 Learning from global leaders in E-Waste management 💡🌍</h2>
          <p className='link'>📢 Let's talk about electronic waste (e-waste) and the valuable lessons we can glean from countries with exceptional e-waste management systems.</p>
        </div>
      </Link>

      {/* Box 10 */}
      <Link to='/One10' className='box_p'>
        <div className='box'>
          <img src={ten} alt="Image 10" className='image_c' />
        </div>
        <div className='box-content'>
          <h2>🌍🔌 E-waste and Sustainable Development Goals (SDGs): Driving India Towards a Greener Future! 🔌🌍</h2>
          <p className='link'>We are excited to share some insights on the crucial role of e-waste management practices in achieving the Sustainable Development Goals (SDGs) in India.</p>
        </div>
      </Link>

      {/* Box 11 */}
      <Link to='/One11' className='box_p'>
        <div className='box'>
          <img src={eleven} alt="Image 11" className='image_c' />
        </div>
        <div className='box-content'>
          <h2>How Switzerland achieved effective E-Waste management?</h2>
          <p className='link'>Switzerland is a global leader in e-waste management. In 2022, the country recycled 85% of its e-waste, far exceeding the EU target of 65%</p>
        </div>
      </Link>

      {/* Box 12 */}
      <Link to='/One12' className='box_p'>
        <div className='box'>
          <img src={twelve} alt="Image 12" className='image_c' />
        </div>
        <div className='box-content'>
          <h2>🌍 Join the journey of electronic waste: From disposal to recycling ♻️</h2>
          <p className='link'>In a world where technology plays a significant role, understanding the journey of electronic waste (e-waste) is vital for a sustainable future.</p>
        </div>
      </Link>

      {/* Box 13 */}
      <Link to='/One13' className='box_p'>
        <div className='box'>
          <img src={thirteen} alt="Image 13" className='image_c' />
        </div>
        <div className='box-content'>
          <h2>🌿🌟India's Green Credits Programme: Empowering Change in Electronic Waste Management! 🌟🌿</h2>
          <p className='link'>Hey eco-warriors and sustainability enthusiasts! 🌎 Are you ready to make a significant impact on the environment while contributing to a greener India?</p>
        </div>
      </Link>

      {/* Box 14 */}
      <Link to='/One14' className='box_p'>
        <div className='box'>
          <img src={fourteen} alt="Image 14" className='image_c' />
        </div>
        <div className='box-content'>
          <h2>🌱 Embracing sustainability: A catalyst for startup sales growth 🚀</h2>
          <p className='link'>In today's rapidly evolving business landscape, startups are not just innovators, but also agents of positive change.</p>
        </div>
      </Link>

      {/* Box 15 */}
      <Link to='/One15' className='box_p'>
        <div className='box'>
          <img src={fifteen} alt="Image 15" className='image_c' />
        </div>
        <div className='box-content'>
          <h2>🌱♻️ Reducing electronic waste starts at home and the office 🏢🏡</h2>
          <p className='link'>As champions of sustainability, we believe that every small effort counts when it comes to reducing electronic waste.</p>
        </div>
      </Link>
    </div>
    </div>
  );
};

export default BlogPost;
