import React from 'react';
import whatsappIcon from '../icons8-whatsapp-48.png';
import phoneIcon from '../icons8-phone-48.png';
import gmailIcon from '../icons8-gmail.svg';

const ContactBar = () => {
  return (
    <div className="fixed-cont-bar">
      <ul className="sc-ul">
        <li className="sc-list"><a href="https://wa.me/919315836383" target="_blank"><img src={whatsappIcon} alt="WhatsApp" /></a></li>
        <li className="sc-list"><a href="mailto:reway.ewm@gmail.com"><img src={gmailIcon} alt="Gmail" /></a></li>
        <li className="sc-list"><a href="tel:+91 9315836383"><img src={phoneIcon} alt="Phone" /></a></li>
      </ul>
    </div>
  );
};

export default ContactBar;
