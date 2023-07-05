import React from "react";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import { exreciseOptions, fetchData } from "../utils/FetchData";
import ExeCard from "./ExeCard";
function Exercise({ exercises, setExercises, bodyPart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];

      if (bodyPart === "all") {
        exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exreciseOptions
        );
      } else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exreciseOptions
        );
      }
      setExercises(exerciseData);
    };
    fetchExerciseData();
  }, [bodyPart]);

  // pagination part
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercise = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };
  return (
    <Box
      id="exercises"
      alignItems="center"
      sx={{
        mt: { lg: "110px", xs: "30px" },

        p: "20px",
        alignContent: "center",
      }}
    >
      <Typography
        variant="h3"
        mb={46}
        sx={{ textUnderlinePosition: "from-font",color:"whitesmoke",textAlign:"center" }}
        color={"black"}
      >
        Showing Results
      </Typography>
      <Stack
        id="classes"
        direction="row"
        sx={{
          gap: { lg: "110px", xs: "50px" },
          margin: "auto",
          width: "80%",
          mt: "-300px",
        }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercise.map((exe, ind) => (
          <ExeCard key={ind} exe={exe} />
        ))}
      </Stack>

      <Stack>
        {exercises.length > 9 && (
          <Pagination
            color="secondary"
            variant="outlined"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / 9)}
            page={currentPage}
            onChange={paginate}
            sx={{ m: "auto", mt: "20px" }}
          />
        )}
      </Stack>
    </Box>
  );
}

export default Exercise;
