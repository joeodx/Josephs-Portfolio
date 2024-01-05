import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "./Projectlist"
import { SlBubble } from "react-icons/sl";


import "../styles/Projectdisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>Introducing {project.name}!</h1>
      <img alt="pic" src={project.image} />
      <p>{project.desc} </p>
      <span className="link" target="_blank">Check out its Source Code here {project.link}</span>
      <span className="link" target="_blank">Watch the live demo of the project here {project.demo}</span>
      <span className="deploy" target="_blank">Deployment link {project.deployed}</span>
     
          <img className="joePicture6" src="../JOE2.png" alt="joe" style={{ width: '210px', height: '210px' }} />
          
          <div className="bubble">
          <SlBubble  size={440}/>
          
       </div>
       <span className="bub">{project.speech}</span>
    </div>
    
  );
}

export default ProjectDisplay;