import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "./Projectlist"


import "../styles/Projectdisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>Introducing {project.name}!</h1>
      <img alt="pic" src={project.image} />
      <p>{project.desc} </p>
      <span className="link">Check out its Source Code here{project.link}</span>
      <span className="link">Watch the live demo of Project Tortee here {project.demo}</span>
      <span className="deploy">Check it out in person here {project.deployed}</span>
    </div>
    
  );
}

export default ProjectDisplay;