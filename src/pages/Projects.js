import React from "react";
import ProjectList from "../components/ProjectList";
import "../styles/Projects.css";
import { ProjectItem } from "../helpers/ProjectItem";


function Projects() {
  return (
    <div className="projects">
      <h1>My personal Projects</h1>
      <div className="projectList">
        {ProjectItem.map((project, index, key) => {
          return (
            <ProjectList
              key={key}
              id={index}
              image={project.image}
              name={project.name}
              skills={project.skills}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
