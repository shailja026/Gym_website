import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import BodyPart from './BodyPart'
import RightArrowIcon from "../assets/icons/right-arrow.png"
import LeftArrowIcon from "../assets/icons/left-arrow.png"
import 'react-horizontal-scrolling-menu/dist/styles.css'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

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


function HorizontalScb({data,bodyPart,setBodyPart}) {
    console.log(data)
   
    
    
  return (
   <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
     {data.map((item) => {
        return <Box
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
       
        >
      <BodyPart item = {item} 
       bodyPart = {bodyPart}
       setBodyParts = {setBodyPart}
      />
        </Box>
       
       })}
   </ScrollMenu>
  )
}

export default HorizontalScb