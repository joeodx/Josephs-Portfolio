import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import "../styles/Contact.css"




export default function Contact() {
  return (
    
    <div className="contact">
      <span className="two">Let build something cool together!!</span>
      <span className="three">My Linkedin < FaLinkedin /></span>
     <span className="four">My Github < DiGithubBadge /></span>
     <span clasName="ive">My Email < MdOutlineEmail /></span>
      <span className="six">My Number ***********</span>
    

    
     
    
    <img className="joePicture3" src="../JOE2.png" alt="joe" />
  </div>
    
  )
}

