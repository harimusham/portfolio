import React from 'react'
import HariCoding from './HariCoding.jpg';
import cursorIcon from './cursorIcon.png';
import serverIcon from './serverIcon.png';
import './About.css';


const About = () => {
  return (
   <section className="acontainer" id="about">
    <h2 className="atitle">About from aio</h2>
    <div className="About-content">
        <img  className="aboutImage" src={HariCoding} alt="meSittingWithLaptop" />
    </div>
    <ul className="aboutItems">
        <li className="aboutItem"><img src={cursorIcon} alt="cursor-icon" />
        <div className="aboutItemText">
            <h3>Frontend Developer</h3>
            <p>I'm a  frontend developer with experience in building responsive and optimized sites</p>
        </div>
        </li>
        <li  className="aboutItem">
            <img src={serverIcon} alt="backend-developer" />
        <div className="aboutItemText">
            <h3>Backend Developer</h3>
            <p>I have experience developing fast and optimised BackEnd Systems  and APIS</p>
        </div>
        </li>
        <li  className="aboutItem">
        <img src={serverIcon} alt="backend-developer" />
        <div className="aboutItemText">
            <h3>UI Designer</h3>
            <p>I have Designed Multiple Landing Pages and have systems as Well</p>
        </div>
        </li>
    </ul>
   </section>
  )
}

export default About
