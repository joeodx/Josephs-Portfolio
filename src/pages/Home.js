import React from "react";
import "../styles/Home.css";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { CiDatabase } from "react-icons/ci";
import { FaHtml5 } from "react-icons/fa";


function Home() {
  return (
    <div className="about">
      <h2>
        Hi There,<br></br>My Name is Joseph...
      </h2>
      <p className="paragraph">
          A Full Stack Developer With A Passion For Learning, Problem Solving
          And Creating.
        </p>
      <div className="prompt">
       
        <div className="symbols">
          <a href="https://github.com/joeodx">
            {" "}
            <DiGithubBadge />{" "}
          </a>
          <a href="https://joseph-o-donovan-878985288">
            {" "}
            <FaLinkedin />{" "}
          </a>
          <a href="https://www.instagram.com/joeodx/">
            {" "}
            <FaInstagram />{" "}
          </a>
        </div>
        <div>
          <img className="joePicture" src="../JOE2.png" alt="joe" />
        </div>
        <div className="javascriptSymbol">
          <IoLogoJavascript />
        </div>
        <div className="reactSymbol">
          <FaReact />
        </div>
        <div className="cssSymbol">
          <FaCss3Alt />
        </div>
        <div className="figmaSymbol">
          <FaFigma />
        </div>
        <div className="nodeSymbol">
          <FaNode />
        </div>
        <div className="gitSymbol">
          <DiGithubBadge />
        </div>
        <div className="databaseSymbol">
          <CiDatabase />
        </div>
        <div className="htmlSymbol">
          <FaHtml5 />
        </div>
    
      </div>
    </div>
  );
}

export default Home;
