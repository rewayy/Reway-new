import React from 'react';
import '../src/App.css';
import AboutUs from './aboutus.js';
import NewComponent from './rocket.js';
import Navbar from './navbar.js';
import Testimonial from './Testimonial.js';
import SimpleForm from "./Form";
import Timeline from './Timeline/timelinepage.jsx';
import JourneySection from './OurJourney/Journey.jsx';
import AppPage from './AppDownload/AppPage.jsx';
import FCards from './Card/FCards.jsx';
import Video from './video.js';


function App() {
  return (
    
    <div className="App">
      <main>
        <Navbar/>
        <AboutUs />
        <JourneySection/>
        <Video/>
        <NewComponent/>
        <Timeline/>
        <FCards/>
        <Testimonial/>
        <AppPage/>
        <SimpleForm/>    
        
      </main>
    </div>
  );
}

export default App;
