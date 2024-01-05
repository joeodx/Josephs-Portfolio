import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { SlBubble } from "react-icons/sl";
import "../styles/Contact.css";





export default function Contact() {
  return (  
    <div className="contact">
      <span className="two">Let's build something cool together!
      </span>
      <a href="https://www.linkedin.com/in/joseph-o-donovan-878985288/" ><span className="three">My Linkedin < FaLinkedin /></span> </a>
      <a href="https://github.com/joeodx"><span className="four">My Github < DiGithubBadge /></span> </a>
     <span className="five">My Email < MdOutlineEmail /></span>

      <span className="location"><IoLocationSharp />London - Willing To Relocate!</span>

    <img className="joePicture3" src="../JOE2.png" alt="joe" />
    <div className="six">
    <SlBubble  size={290}/>
    </div>
    <span className="seven">"Follow My 100 Days Of Code Challenge by Clicking On My Linkedin Above!"</span>

  </div>

  )
}

