import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import quizIcon from "../Assets/quizIcon.svg";
import "../Styles/home.css";
const Home = () => {
  return (
    <Box className="home_container">
      <img className="quiz_icon" src={quizIcon} alt={"Quiz Icon"} />
      <Typography variant="h3" fontWeight={"bold"} color="#5957c8">
        Happy you are here?
      </Typography>
      <Typography variant="h5" color="#5957c8" textAlign="left">
        Take our test now.
      </Typography>
      <Typography
        mt={4}
        textAlign="center"
        mb={4}
        variant="h6"
        color="darkgray"
      >
        By answering these questions, you will upskill yourself in a lot of
        study areas.
      </Typography>
      <TextField
        variant="standard"
        placeholder="Username here"
        label="Enter your username"
        autoComplete="true"
        autoFocus={true}
        spellCheck={"true"}
      />
      <Box mt={2}>
        <Button variant="contained" style={{ backgroundColor: "#5957c8" }}>
          Start Quiz
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
