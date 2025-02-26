import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Item = ({ title, institution, details }) => (
  <Box
    sx={{
      py: 3,
      px: 5,
      backgroundColor: "#121212",
      borderRadius: 2,
      textAlign: "center",
      border: "2px solid cyan",
      boxShadow: "0px 4px 10px rgba(100, 200, 255, 0.3)",
      width: "100%",
    }}
  >
    <Typography variant="h6" fontWeight="bold" color="cyan">
      {title}
    </Typography>
    <Typography variant="body1" color="white">
      {institution}
    </Typography>
    <Typography variant="body2" color="gray">
      {details}
    </Typography>
  </Box>
);

const Edu = () => {
  return (
    <Box sx={{ width: "100%", textAlign: "center", py: 5, px: 2, color: "white" }}>
      <Typography variant="h4" fontWeight="bold" color="cyan" mb={3}>
        Education
      </Typography>
      <Stack spacing={3} sx={{ width: { xs: "90%", md: "60%" }, margin: "auto" }}>
        <Item title="10th CBSE - 2019" institution="Kendriya Vidyalaya Santragachi" details="84.40%" />
        <Item title="12th CBSE - 2021" institution="Kendriya Vidyalaya Hinoo" details="89.90%" />
        <Item title="B.Tech CSE - 2021-2025" institution="Gita Autonomous College, Bhubaneswar" details="Pursuing" />
      </Stack>
    </Box>
  );
};

export default Edu;
