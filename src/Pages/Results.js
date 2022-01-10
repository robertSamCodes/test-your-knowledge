import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "../Styles/results.css";

const Results = () => {
  return (
    <Box className="results_container">
      <Box className="upper_part">
        <Typography variant="h3" fontWeight={"bold"} texAlign="center">
          Quiz Completed
        </Typography>
      </Box>

      <Box style={{ width: 200, height: 200 }} className="progressbar">
        {/* <CircularProgressbar
          value={45}
          text={`${45}%`}
          styles={{
            // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
              // Path color
              stroke: `rgba(62, 152, 199, ${45 / 100})`,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",
              // Customize transition animation
              transition: "stroke-dashoffset 0.5s ease 0s",
              textAlign: "center",
              // Rotate the path
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              // Trail color
              stroke: "#d6d6d6",
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",
              // Rotate the trail
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            // Customize the text
            text: {
              // Text color
              fill: "#f88",
              // Text size
              fontSize: "16px",
            },
            // Customize background - only used when the `background` prop is true
            background: {
              fill: "#3e98c7",
            },
          }}
        /> */}
      </Box>

      <Box className="lower_part">Lower Part</Box>
    </Box>
  );
};

export default Results;
