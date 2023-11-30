import React, { useState, useEffect } from 'react';
import './Testimonial.css';

const testimonials = [
  {
    name: 'John Doe',
    designation: 'Web Developer',
    review: 'This is a fantastic testimonial. Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is a fantastic testimonial. Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is a fantastic testimonial. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('./img/testimonial-1.jpg')
  },
  {
    name: 'Jane Smith',
    designation: 'Designer',
    review: 'Great experience with this service. Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is a fantastic testimonial. Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is a fantastic testimonial. Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is a fantastic testimonial. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('./img/testimonial-2.jpg')
  },
  {
    name: 'Alice Johnson',
    designation: 'Frontend Developer',
    review: 'Highly recommended! Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('./img/testimonial-3.jpg')
  },
];

const images = [
  require('./img/testimonial-1.jpg'),
  require('./img/testimonial-2.jpg'),
  require('./img/testimonial-3.jpg'),
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(true); // Change to true for initial visibility

  const nextTestimonial = () => {
    setIsActive(false);
    setTimeout(() => {
      setActiveIndex((activeIndex + 1) % testimonials.length);
      setIsActive(true);
    }, 500); // Delay the slide until the fade-out animation finishes
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change the interval time as needed (in milliseconds)

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, [activeIndex]);

  return (
    <div>
      <div className="fadeInUp black">
        <h1 className="head">What People Say About <br/> Reway </h1>
      </div>

      <div className="testimonial-slider">
        <div className="left-div">
          <div className="im4">
            <div className="testimonial-img">
              {images.map((image, index) => (
                <img key={index} className={`img-fluid animated pulse infinite ${index === activeIndex ? 'active' : ''}`} src={image} alt={`Image ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className={`testimonial fade-in ${isActive ? 'active' : ''}`}>
            <p className="t1">{testimonials[activeIndex].review}</p>
            <br />
            <h3 className="head1">{testimonials[activeIndex].name}</h3>
            <br/>
            <p className="section-title1">{testimonials[activeIndex].designation}</p>
            <br/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
