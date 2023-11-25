import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cards from './Card/FCards';
import Navbar from './FAQs/FAQPage';
import AppPage from './AppDownload/DownAppPage'
import JourneySection from './OurJourney/Journey';
import Timeline from './Timeline/timelinepage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Cards />
    <Navbar />
    <AppPage/>
    <JourneySection/>
    <Timeline/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();