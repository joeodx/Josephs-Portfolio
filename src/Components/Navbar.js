import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
import "../styles/Navbar.css";
// import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';



function Navbar() {
    const [expandNavbar, setExpandNavbar ] = useState(false)


  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton"> 
        <button 
            onClick={() => {setExpandNavbar((prev) => !prev);
            }}
            >
             {/* <CiMenuBurger/> */}
              </button>
        </div>
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/myStory"> My Story </Link>
            <Link to="/contact"> Contact </Link>
      
        </div>
        
        </div>
  );
}

export default Navbar