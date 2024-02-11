import React from 'react'
import hari from './hari.jpg';
import './hero.css';
const Hero = () => {
  return (
    <section className="container">
        <div className="content">
            <h1 className="htitle"> Hi,I'm Hari</h1>
            <p className="description">I'am Full Stack Developer Using React and NodeJs.Reach Out if You'd like to Learn More! </p>
            <a  className="contact-btn" href="mailto:harikiranmusham@gmail.com">ContactUs</a>
        </div>
        <img  className="heroimg" src={hari} alt="Hero of Me" />
        <div className="topBlur"></div>
        <div className="bottomBlur"></div>
    </section>
    
  );
};

export default Hero
