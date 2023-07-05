import React from "react";
import Navbar from "../component/Navbar";
import "./../Css/home.css";
import { Button } from "@mui/material";
import bgvideo from "./../assets/bgVideo.mp4";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
 
  return (
    <div className="main" id="home">
      <div className="overlay"></div>
      <Navbar />
      <video src={bgvideo} autoPlay loop muted />
      <div className="containt">
        <h1>
          ADDICTION TO GETING <br /> STRONGER
        </h1>
        <Button
          variant="contained"
          color="error"
          sx={{ width: "150px", mt: "10px", mb: "10px", mr: "30px", p: "10px" }}
          onClick={() => navigate("/regitration")}
        >
          Join with us
        </Button>
      </div>
    </div>
  );
}

export default Home;
