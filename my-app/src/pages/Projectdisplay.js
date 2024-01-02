import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "./Projectlist"

import "../styles/Projectdisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>name={project.name}</h1>
      <img alt="pic" src={project.image} />
    </div>
  );
}

export default ProjectDisplay;