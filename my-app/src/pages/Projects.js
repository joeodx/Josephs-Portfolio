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
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandVercel } from "react-icons/tb";
import { SlBubble } from "react-icons/sl";


function Projects() {
  return (
    <div className="projects">

      <div className="projectList">
           {ProjectList.map((project, idx) => {
            return <ProjectItem id={idx} name={project.name}  image={project.image} />
           })}
           <div>
          <img className="joePicturetwo" src="../JOE2.png" alt="joe2" />
        </div>
        <div className="prompt">
        <div className="javascriptSymbol3">
          <IoLogoJavascript />
        </div>
        <div className="reactSymbol3">
          <FaReact />
        </div>
        <div className="cssSymbol3">
          <FaCss3Alt />
        </div>
        <div className="figmaSymbol3">
          <FaFigma />
        </div>
        <div className="nodeSymbol3">
          <FaNode />
        </div>
        <div className="gitSymbol3">
          <DiGithubBadge />
        </div>
        <div className="databaseSymbol3">
          <CiDatabase />
        </div>
        <div className="htmlSymbol3">
          <FaHtml5 />
        </div>
        <div className="typescript3">
          <TbBrandTypescript  />
        </div>
        <div className="tailwind3">
           <BiLogoTailwindCss /> 
        </div>
        <div className="vercel3">
           <TbBrandVercel  /> 
        </div>
        <div className="speech2">
           <SlBubble />
        </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;