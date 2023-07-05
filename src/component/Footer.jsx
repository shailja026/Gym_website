import React from "react";
import "../Css/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
// import Registration from "../pages/Registration";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="div">
      <div className="footer">
        <div className="social_info">
          <h1>S4S</h1>
          <p>Connect with us</p>
          <div className="icons">
            <FacebookIcon fontSize="35px" />
            <InstagramIcon fontSize="35px" />
            <TwitterIcon fontSize="35px" /> <br />
          </div>
          <h5>
            
            <Link to="/regitration">Register now</Link>
          </h5>
          </div>
          <div>
            <h3>Qyick Links</h3>
            <nav className="links">
              <a href="#home">Home</a>
              <a href="#about">About </a>
              <a href="#classes">Classes</a>
              <a href="#bLogs">bLogs</a>
            </nav>
          </div>
          <div className="partners">
            <h1>Our partners</h1>
            <h5>Gold Gym</h5>
            <h5>C3 fitness club</h5>
            <h5>Anytime fitness</h5>
            <h5>shape You</h5>
          </div>
        </div>
        <div className="contact">
          <p>@S4Sfitness.in. All Rights Reserved.</p>
          <p>Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    
  );
}

export default Footer;
