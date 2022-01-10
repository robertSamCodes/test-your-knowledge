import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import React from "react";

const QuestionContainer = () => {
  const dispatch = useDispatch();
  return (
    <Box className="question">
      <Typography
        fontWeight="bold"
        lineHeight={1.75}
        textAlign="center"
        paddingTop={2}
        mb={-4}
      >
        All my life, I have come to understand that there is no dream too
        far-fetched. This is the air I breathe. Just tryna put some dummy text
        here.
      </Typography>
      <Box mt={10}>
        <Button
          style={{ marginBottom: 20 }}
          variant="outlined"
          fullWidth
          color="primary"
        >
          Option 1
        </Button>

        <Button
          style={{ marginBottom: 20 }}
          variant="outlined"
          fullWidth
          color="primary"
        >
          Option 2
        </Button>
        <Button
          style={{ marginBottom: 20 }}
          variant="outlined"
          fullWidth
          color="primary"
        >
          Option 3
        </Button>
        <Button
          style={{ marginBottom: 20 }}
          variant="outlined"
          fullWidth
          color="primary"
        >
          Option 4
        </Button>

        <button
          onClick={() => dispatch({ type: "QUESTION_NUMBER" })}
          className="next_btn"
        >
          NEXT
        </button>
      </Box>
    </Box>
  );
};

export default QuestionContainer;
