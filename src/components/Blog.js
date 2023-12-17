import React from 'react';
import NavBar from '../navbar.js';
import BlogPost from './BlogPost.js';
import './Blog.css';

function App() {
    return (
        <div>
      <div className='navbar'> <NavBar/> </div>
        <div  className='blog'><BlogPost/></div>
        
      </div>
     
    );
  }
  
  export default App;