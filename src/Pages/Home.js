import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import quizIcon from "../Assets/quizIcon.svg";
import "../Styles/home.css";
const Home = () => {
  const [userInput, setUserInput] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleButtonDisabling = () =>
    userInput.length ? setDisableButton(false) : setDisableButton(true);

  useEffect(() => {
    handleButtonDisabling();
  }, [userInput]);

  return (
    <Box className="home_container">
      <img className="quiz_icon" src={quizIcon} alt={"Quiz Icon"} />
      <Typography variant="h4" fontWeight={"bold"} mt={2} color="#5957c8">
        Happy you are here? <br /> Take our test now.
      </Typography>
      {/* <Typography variant="h5" color="#5957c8" textAlign="left">
        Take our test now.
      </Typography> */}
      <Typography
        mt={2}
        textAlign="center"
        // padding={2}
        variant="h6"
        color="darkgray"
      >
        By answering these questions, you will upskill yourself in a lot of
        study areas.
      </Typography>
      <TextField
        className="userInputField"
        variant="standard"
        placeholder="Username here"
        label="Enter your username"
        autoComplete="true"
        style={{ width: 350 }}
        autoFocus={true}
        spellCheck={"true"}
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleButtonDisabling}
      />
      <Box sx={{ minWidth: 350 }} mt={2}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            s // style={{ width: "350px" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={(event) => setCategory(event.target.value)}
          >
            <MenuItem value={"History"}>History</MenuItem>
            <MenuItem value={"Sports"}>Sports</MenuItem>
            <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
            <MenuItem value={"Celebrities"}>Celebrities</MenuItem>
            <MenuItem value={"Geography"}>Geography</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box mt={2}>
        <Button
          variant="contained"
          disabled={disableButton}
          onClick={() => navigate("/question")}
        >
          {/* style={{ backgroundColor: "#5957c8" }} */}
          Start Quiz
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
