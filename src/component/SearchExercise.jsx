import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
 
  Button,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import "../Css/searchExe.css";
import { fetchData, exreciseOptions } from "../utils/FetchData";
import HorizontalScb from "./HorizontalScb";
function SearchExercise({setExercises, bodyPart , setBodyPart}) {
  const [search, setSearch] = useState("");
//   const [Exercise, setExercise] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exreciseOptions
      );
      console.log(bodyPartsData)
       setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExerciseData();
  }, []);
  const handleSearch = async () => {
    if (search) {
      const exercises = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exreciseOptions
      );
      console.log(exercises);

      const searchedExercise = exercises.filter(
        (exercise) =>
        // console.log(exercise)
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      window.scrollTo({top:1800 , left:100 , behavior:"smooth"})
      setSearch("");
      setExercises(searchedExercise);
    }
    
  };

  return (
    <Stack
      alignItems="center"
      mt="40px"
      justifyContent="center"
      p="20px"
      sx={{
        ml: { lg: "-250px" },
      }}
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mp="50px"
        textAlign={"center"}
      >
        Awesome Exercises You <br /> Should know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          value={search}
          type="text"
          className="input"
          placeholder="Search exercises here"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "5px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "gray",
            borderRadius: "40px",
            cursor: "pointer",
          }}
        onChange={(e)=> setSearch(e.target.value.toLowerCase())}
        />

        <Button
          variant="contained"
          color="error"
          sx={{
            width: { lg: "150px", xs: "80px" },
            mt: "10px",
            mb: "15px",
            ml: "15px",
            p: "10px",
            mr: { lg: "30px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position:"relative",top:"2px",width:"80%", p:"20px",alignItems:"center",ml:"100px"}}>
        <HorizontalScb data={bodyParts}
        bodyPart = {bodyPart}
        setBodyPart = {setBodyPart}
        />
      </Box>
    </Stack>
  );
}

export default SearchExercise;
