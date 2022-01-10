import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const QuestionNumber = () => {
  return (
    <Box>
      <Typography>Question 1 / 10</Typography>
      <progress
        style={{ olor: "#f3ae42" }}
        value="1"
        min="0"
        max="10"
      ></progress>
    </Box>
  );
};

export default QuestionNumber;
