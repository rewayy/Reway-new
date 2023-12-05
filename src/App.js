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
import Footer from './footer/footer.js';
import ContactBar from './Fixed contact bar/fixedcont.js';



function App() {
  return (
    
    <div className="App">
      <main>
        <Navbar/>
        <ContactBar/>
        <AboutUs />
        <JourneySection/>
        <NewComponent/>
        <FCards/>
        <Video/>
        <Testimonial/>
        <Timeline/>
        <AppPage/>
        <SimpleForm/>  
        <Footer/>  
        
      </main>
    </div>
  );
}

export default App;
