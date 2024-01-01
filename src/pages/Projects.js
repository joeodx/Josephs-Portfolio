import React from "react";
import "../styles/Projects.css";
import  ProjectItem  from "../Components/Projectitem"
import { ProjectList } from "./Projectlist"
import { DiGithubBadge } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { CiDatabase } from "react-icons/ci";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";


function Projects() {
  return (
    <div className="projects">

      <div className="projectList">
           {ProjectList.map((project, idx) => {
            return <ProjectItem id={idx} name={project.name}  image={project.image} />
           })}
           <div>
          <img className="joePicture2" src="../JOE2.png" alt="joe2" />
        </div>
        <div className="javascriptSymbol2">
          <IoLogoJavascript />
        </div>
        <div className="reactSymbol2">
          <FaReact />
        </div>
        <div className="cssSymbol2">
          <FaCss3Alt />
        </div>
        <div className="figmaSymbol2">
          <FaFigma />
        </div>
        <div className="nodeSymbol2">
          <FaNode />
        </div>
        <div className="gitSymbol2">
          <DiGithubBadge />
        </div>
        <div className="databaseSymbol2">
          <CiDatabase />
        </div>
        <div className="htmlSymbol2">
          <FaHtml5 />
        </div>
        <div className="typescript">
          <TbBrandTypescript  />
        </div>
        
      </div>
    </div>
  );
}
export default Projects;