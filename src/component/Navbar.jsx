import React from "react";
import "./../Css/navbar.css";
// import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navDiv">
      <h1 id="home"> S4S CLUB</h1>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About </a>
        <a href="#classes">Classes</a>
        <a href="#bLogs">bLogs</a>
      </nav>
      <Button
        variant="contained"
        color="error"
        sx={{ width: "120px", mt: "15px", mb: "15px", mr: "15px",p:"5px" }}
        onClick={() => navigate("/regitration")}
      >
        Join us
      </Button>
    </div>
  );
}

export default Navbar;
