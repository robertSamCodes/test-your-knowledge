import { Box } from "@mui/material";
import React from "react";
import QuestionContainer from "../Components/QuestionContainer";
import QuestionNumber from "../Components/QuestionNumber";
import "../Styles/question.css";

const Question = () => {
  return (
    <Box className="question_container">
      <QuestionNumber />
      <QuestionContainer />
    </Box>
  );
};

export default Question;
