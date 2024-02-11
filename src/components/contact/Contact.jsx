import React from "react";
import  "./Contact.css";
import email from './emailIcon.png';
import github from './githubIcon.png';
import linked from './linkedinIcon.png';


export const Contact = () => {
  return (
    <footer id="contact" className="ccontainer">
      <div className="styles.text">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className="clinks">
        <li className="clink">
          <img src={email} alt="Email icon" />
          <a href="mailto:myemail@email.com">Email Us</a>
        </li>
        <li className="clink">
          <img
            src={github}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/musham-hari-kiran-0983a8218/">linkedin</a>
        </li>
        <li className="clink">
          <img src={linked} alt="Github icon" />
          <a href="https://github.com/harimusham">github.com</a>
        </li>
      </ul>
    </footer>
  );
};
