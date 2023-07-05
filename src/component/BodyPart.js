import React from 'react'
import { Stack,Typography } from '@mui/material'
import Icon from "../assets/icons/gym.png"
function BodyPart({item  , bodyPart ,setBodyParts}) {
  return (
   <Stack
   type = "button"
   alignItems="center"
   justifyContent="center"
   className='bodyPart-card'
   sx={{
    borderTop : bodyPart === item ? "4ps solid red" : "",
    color:"white",
   borderBottomLeftRadius:"20px",
    width:"270px",
    height:"280px",
    cursor:"pointer",
    gap:"45px"

   }}
   onClick = {() => {
    setBodyParts(item)
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }}
   >
    <img src={Icon} alt='' width="30%"/> 
    <Typography fontSize={24} textTransform="capitalize">{item}</Typography>
   </Stack>
  )
}

export default BodyPart