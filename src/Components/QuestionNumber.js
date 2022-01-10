import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

const QuestionNumber = () => {
  const questionNumber = useSelector((state) => state.question_number);
  console.log(questionNumber);
  return (
    <Box>
      <Typography>Question {questionNumber} / 10</Typography>
      <progress
        style={{ color: "#f3ae42" }}
        value="1"
        min="0"
        max="10"
      ></progress>
    </Box>
  );
};

export default QuestionNumber;
