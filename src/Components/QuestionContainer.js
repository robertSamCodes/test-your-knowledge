import { Box, Button, Typography } from "@mui/material";
import React from "react";

const QuestionContainer = () => {
  return (
    <Box className="question">
      <Typography
        fontWeight="bold"
        lineHeight={1.75}
        textAlign="center"
        paddingTop={2}
      >
        This is the air I breathe. Just tryna put some dummy text here.
      </Typography>
      <Box mt={4}>
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

        <button className="next_btn">NEXT</button>
      </Box>
    </Box>
  );
};

export default QuestionContainer;
