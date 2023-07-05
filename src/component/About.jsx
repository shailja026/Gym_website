import React from "react";
import "../Css/about.css";
import { Button,Box } from "@mui/material";
import Typography from '@mui/material/Typography';

function About() {
  return (
    <div id="about" style={{backgroundColor:"black" ,padding:"50px"}}>
    <Box className="about"  sx={{
        width: {lg:"99%" , xs:"100%"  },
        // overflowX:"hidden",
       

     }}>
      <Box className="first" sx={{
        display:{lg:"flex",xs:"block"},
        ml:{lg:"250px" , xs:"180px"},
        mt:"80px"
      }}>
        <Box className="youtube">
            <Box sx={{zIndex:"1",p:"10px",mt:"10px",borderRadius:"20px"}}>
            <iframe
            width="390"
            height="590"
            
            src="https://www.youtube.com/embed/IpUQElrETw4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
            </Box>
          
        </Box>
        <Box className="conatainer" sx={{display:"flex",
    flexDirection:"column",alignItems:"flex-start",
    width:{lg:"30vw", xs:"70vw"},
    ml:{lg:"200px",xs:"30px"},
    mt:{lg:"150px",xs:"50px"}}}>
          <h1 style={{fontFamily:"sans-serif",color:"red",marginBottom:"8px"}}>About us</h1>
          <Typography  variant="body1"  gutterBottom fontSize={25} sx={{mb:"10px",textAlign:"left",mt:"10px"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            quibusdam ipsam nostrum totam libero ex saepe eum modi ut
            accusantium. Exercitationem debitis praesentium esse assumenda optio
            necessitatibus, vitae beatae asperiores!
          </Typography>

          <Button
            variant="contained"
            color="error"
            sx={{ width: "150px", mt: "10px", mb: "10px", mr: "15px",p:"10px" }}
          >
            Learn more
          </Button>
        </Box>
      </Box>

      <Box className="second"
      sx={{
        display:{lg:"flex",xs:"block"},
        flexDirection:"row-reverse",
        mr:{lg:"400px" , xs:"10px"},
        ml:{lg:"",xs:"180px"},
        mt:"100px"
      }}
      >
        <Box className="youtube">
        <Box sx={{zIndex:"1",p:"10px",mt:"10px",borderRadius:"20px"}}>
            <iframe
            width="390"
            height="590"
            
            src="https://www.youtube.com/embed/IpUQElrETw4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
            </Box>
          
        </Box>
        <Box className="conatainer" sx={{display:"flex",
    flexDirection:"column",alignItems:"flex-start",
    width:{lg:"30vw", xs:"70vw"},
    mr:{lg:"200px",xs:"40px"},
    mt:{lg:"150px",xs:"50px"}}}>
        <h1 style={{fontFamily:"sans-serif",color:"red",marginBottom:"8px"}}>Why Us ??</h1>
          <Typography  variant="body1"  gutterBottom fontSize={25} sx={{mb:"10px",textAlign:"left",mt:"10px",ml:"1px"}}>
          <span style={{color:"red"}}>REAL CUSTOMERS, REAL TRUST</span> <br/>
You've voted us as one of the best in fitness equipment! Our top ranking on Judge.Me, Product Review and Trustpilot just goes to show that we're here to give you the honest, reliable service you deserve. <br/>
<span style={{color:"red"}}>FLEXIBLE AND SECURE PAYMENTS </span> <br/>
When it comes to payments, we understand the importance of convenience and accessibility. We provide fast, easy, and hassle-free payment options and flexible buy now, pay later payment plans!
          </Typography>

     
        </Box>
      </Box>
    </Box>
    </div>
  );
}

export default About;
