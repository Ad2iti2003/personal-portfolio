import { Box, Card, CardContent, Slider, Typography } from "@mui/material";
import React from "react";

const skills = [
  { name: "HTML", value: 90 },
  { name: "CSS", value: 70 },
  { name: "JavaScript", value: 65 },
  { name: "Material UI", value: 70 },
  { name: "Bootstrap", value: 75 },
  { name: "React.js", value: 80 },
  { name: "Next.js", value: 60 },
  { name: "Node.js", value: 60 },
  { name: "Tailwind CSS", value: 70 },
  { name: "MySQL", value: 75 },
];

const Skill = () => {
  return (
    <Box className="py-20" display="flex" flexDirection="column" alignItems="center">
      <Card sx={{ backgroundColor: "#1e1e1e", color: "white", borderRadius: 2, padding: 3, width: "90%", maxWidth: 600,border:"2px cyan solid" , boxShadow:"0px 0px 10px #00FFFF" }}>
        <CardContent>
          {skills.map((skill, index) => (
            <Box key={index} display="flex" alignItems="center" gap={2} mb={2}>
              <Typography variant="body1" fontWeight="bold" sx={{ minWidth: "120px" }}>
                {skill.name}
              </Typography>
              <Slider
                value={skill.value}
                min={0}
                step={1}
                max={100}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
                sx={{
                  flexGrow: 1, // Makes the slider take the remaining space
                  color: "cyan",
                  "& .MuiSlider-thumb": { backgroundColor: "white" },
                  "& .MuiSlider-track": { backgroundColor: "cyan" },
                }}
              />
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Skill;
