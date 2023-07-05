import React,{useContext} from 'react'
import "../Css/trainer.css"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import pic1 from "../assets/trainers/pic1.jpg"
import pic2 from "../assets/trainers/pic2.jpg"
import pic3 from "../assets/trainers/pic3.jpg"
import pic4 from "../assets/trainers/pic4.jpg"
import pic5 from "../assets/trainers/pic5.jpg"
import pic6 from "../assets/trainers/pic66.jpg"
import pic7 from "../assets/trainers/pic7.jpg"
import pic8 from "../assets/trainers/pic8.jpg"
import pic9 from "../assets/trainers/pic9.jpg"
import pic10 from "../assets/trainers/pic10.jpg"
import LeftArrowIcon from "../assets/icons/left-arrow.png"
import RightArrowIcon from "../assets/icons/right-arrow.png"
import { Box, Button, Typography } from '@mui/material';

function Trainer() {
  const data = [
    {name:"Shailja Gupta"  , Image:pic1},
    {name:"Harshit Sachan" , Image:pic2},
    {name:"" , Image:pic3},
    {name:"" , Image:pic4},
    {name:"" , Image:pic5},
    {name:"" , Image:pic6},
    {name:"" , Image:pic7},
    {name:"" , Image:pic8},
    {name:"" , Image:pic9},
    {name:"" , Image:pic10},
  ]
  console.log(data)

  const RightArrow = () => {
    const{scrollNext} = useContext(VisibilityContext);
    return (
        <Typography onClick = {() => scrollNext()}>
            <img src={RightArrowIcon} alt='' />
        </Typography>
    ) 
}

const LeftArrow = () => {
    const{scrollPrev} = useContext(VisibilityContext);
    return (
        <Typography onClick = {() => scrollPrev()}>
            <img src={LeftArrowIcon} alt='' />
        </Typography>
    ) 
}
  return (
    <div style={{width:"1200px",margin:"80px 300px",color:"black" ,
   alignContent:"center"}}>
      <h1 style={{color:"red",textAlign:"center",marginBottom:"20px"}}>Meet our Team</h1>
      <Typography variant='h6'  xs={{ml:"80px",textAlign:"center", marginBottom:"50px"}}>“The last three or four reps is what makes the muscle grow. br
      {"                                    "}This area of pain divides a champion from someone who is not a champion.
       </Typography>
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((ele , ind) => 
      <Box sx={{width:{lg:"400px",xs:"300px",marginLeft:"30px"}}} key={ind}>
        <img src={ele.Image} alt='i'  style={{width:"400px" , height:"400px",gap:"30px",margin:"auto",}}/>
      </Box>)}
    </ScrollMenu>
    <Button
        variant="contained"
        color="error"
        sx={{ width: "200px", mt: "35px", marginLeft:"450px" }}
      >
        See The Whole Team
      </Button>
    </div>
  )
}

export default Trainer