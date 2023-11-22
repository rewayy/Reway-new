import React from 'react';
import '../src/App.css';
import AboutUs from './aboutus.js';
import NewComponent from './rocket.js';
import Navbar from './navbar.js';
import Testimonial from './Testimonial.js';
import SimpleForm from "./Form";



function App() {
  return (
    
    <div className="App">
      <main>
        <Navbar/>
        <AboutUs />
        <NewComponent/>
        <Testimonial/>
        <SimpleForm/> 
     
       
        
      </main>
    </div>
  );
}

export default App;
