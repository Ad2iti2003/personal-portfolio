import { Card, CardContent, Typography, Box } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      role: "Web Developer Intern",
      company: "Bharat Chase",
      duration: "16 Jan 2024 – 16 Feb 2024",
      responsibilities: [
        "Optimized website performance, ensuring mobile responsiveness and user-friendly designs.",
        "Performed comprehensive speed tests and UI/UX evaluations for enhanced user interaction.",
      ],
      technologies: "HTML, CSS, JavaScript, UX/UI principles",
    },
    {
      role: "Web Developer Intern",
      company: "Greyspire Innovation India Pvt Ltd",
      duration: "28 May 2024 – 31 Aug 2024",
      responsibilities: [
        "Developed the company's landing page focusing on user engagement and responsiveness.",
        "Built a dynamic contact page integrated with email functionality for user inquiries.",
        "Designed and implemented an admin dashboard for efficient user and system management.",
      ],
      technologies: "JavaScript, React.js, Next.js, Express.js, Tailwind CSS, Material UI, MySQL",
    },
  ];

  return (
    <Box display="flex" className='py-20' maxWidth='800px' flexDirection="column" gap={2} margin="auto">
      {experiences.map((exp, index) => (
        <Card key={index} sx={{ backgroundColor: "#1e1e1e", color: "white", borderRadius: 2, padding: 2 ,boxShadow: "0px 0px 10px #00FFFF",marginY: 2, border:"2px solid cyan" }}>
          <CardContent>
            <Box display="flex" alignItems="center" gap={1} marginBottom={1}>
              <WorkIcon sx={{ color: "cyan" }} />
              <Typography variant="h6">{exp.role}</Typography>
            </Box>
            <Typography variant="subtitle1" sx={{ color: "cyan" }}>
              {exp.company}
            </Typography>
            <Typography variant="body2" sx={{ color: "gray", marginBottom: 1 }}>
              {exp.duration}
            </Typography>
            <ul style={{ paddingLeft: "16px", marginBottom: 0 }}>
              {exp.responsibilities.map((task, i) => (
                <li key={i}>
                  <Typography variant="body2">{task}</Typography>
                </li>
              ))}
            </ul>
            <Typography variant="body2" sx={{ marginTop: 1, fontWeight: "bold" }}>
              Technologies Used: {exp.technologies}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default WorkExperience;

