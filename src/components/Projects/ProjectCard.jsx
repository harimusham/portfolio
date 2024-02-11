import React from "react";
import "./ProjectCard.css";
const ProjectCard = ({project: { title, imageSrc, description, skills, demo, source },})=> {
  return (
    <div className="pccontainer">
      <img
        src={imageSrc}
        alt={` ${title}`}
        className="pcimage"
      />
      <h3 className="pctitle">{title}</h3>
      <p className="pcdescription">{description}</p>
      <ul className="pcskills">
        {skills.map((skill, id) => {
          return (
            <li key={id} className="pcskill">
              {skill}
            </li>
          );
        })}
      </ul>
      <div className="pclinks">
        <a href={demo} className="pclink">
          Demo
        </a>
        <a href={source} className="pclink">
          Source
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;