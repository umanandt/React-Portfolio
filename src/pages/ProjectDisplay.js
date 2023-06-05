import "../styles/ProjectDisplay.css";
import { useParams } from "react-router-dom";
import { ProjectItem } from "../helpers/ProjectItem";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";




function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectItem[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt=''/>
      <p> {project.skills} </p>     
      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay;
