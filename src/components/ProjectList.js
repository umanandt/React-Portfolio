import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectList({ image, name, skills, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/projects/"+id);
      }}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bgImage"
      />
      <h1> {name}</h1>
      <p>
        <b> Skills:</b> {skills}
      </p>
    </div>
  );
}

export default ProjectList;
