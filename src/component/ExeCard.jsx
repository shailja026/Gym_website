import React from 'react'
import {Link} from "react-router-dom";
import { Stack,Button,Typography } from '@mui/material';
function ExeCard({exe}) {
  return (
    <Link to={`/exe/${exe.id}`} className='exe-card' >
        <img src={exe.gifUrl} alt={exe.name} loading='lazy' style={{backgroundColor:"black"}}/>
        <Stack direction="row" >
          <Button sx={{ml:{lg:"22px" , xs:"5px"},background:"#fcc757",
        fontSize:"15px", borderRadius:"20px", textTransform:"capitalize",mt:"15px",mr:"20px",p:"5px",color:"black"}}>
            {exe.bodyPart}
            </Button>   

             <Button sx={{ml:{lg:"22px" , xs:"5px"},background:"#fcc757",
        fontSize:"15px", borderRadius:"20px", textTransform:"capitalize",mt:"15px",color:"green"}}>
            {exe.target}
            </Button>          
        </Stack>     
        <Typography sx={{fontSize:"25px", color:"black", mt:"10px",fontWeight:"800",textDecoration:"none",width:"70%"}}>
            {exe.name}
        </Typography>
    </Link>
  )
}

export default ExeCard