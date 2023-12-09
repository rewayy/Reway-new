import React from 'react';
import '../Fixed contact bar/fixedcont.css';
import whatsappIcon from '../icons8-whatsapp-48.png';
import phoneIcon from '../icons8-telephone-47.png';
import gmailIcon from '../icons8-gmail-48.png';

const ContactBar = () => {
  return (
    <div className="fixed-cont-bar">
      <ul className="sc-ul">
        <li className="sc-list"><a className='iconn' href="https://wa.me/919315836383" target="_blank"><img className='iconn' src={whatsappIcon} alt="WhatsApp" /></a></li>
        <li className="sc-list"><a  href="mailto:reway.ewm@gmail.com"><img className='iconn' src={gmailIcon} alt="Gmail" /></a></li>
        <li className="sc-list"><a  href="tel:+91 9315836383"><img className='iconn' src={phoneIcon} alt="Phone" /></a></li>
      </ul>
    </div>
  );
};

export default ContactBar;
