import React from 'react';
import '../src/App.css';
import AboutUs from './aboutus.js';
import NewComponent from './rocket.js';
import Navbar from './navbar.js';



function App() {
  return (
    
    <div className="App">
      <main>
        <Navbar/>
        <AboutUs />
        <NewComponent/>
     
       
        
      </main>
    </div>
  );
}

export default App;
