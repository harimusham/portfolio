import React from "react";
import  "./Projects.css";
import Projects from "../../data/projects.json";
import ProjectCard  from "./ProjectCard.jsx";

const Projectss = () => {
  return (
    <section className="pcontainer" id="projects">
      <h2 className="ptitle">Projects</h2>
      <div className="pprojects">
        {Projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
export default Projectss;