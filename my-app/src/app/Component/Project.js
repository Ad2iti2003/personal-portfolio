import React from "react";
import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import Image from "next/image";


const projects = [
  {
    id: 1,
    title: "Plants",
    description: "Plants are essential for all life.",
    image: "/photo/plants.jpg",
  },
  {
    id: 2,
    title: "Animals",
    description: "Animals are a part of nature.",
    image: "/photo/animals.jpg",
  },
  {
    id: 3,
    title: "Humans",
    description: "Humans depend and animals for survival.",
    image: "/photo/humans.jpg",
  },
  {
    id:4,
    title:"Myntra clone",
    description:"Html,CSS,javascript",
    image:"/photo/human.jps",
  },
  {
    id: 5,
    title: "Plants",
    description: "Plants are essential for all life.",
    image: "/photo/plants.jpg",
  },
  {
    id: 6,
    title: "Animals",
    description: "Animals are a part of nature.",
    image: "/photo/animals.jpg",
  },
  {
    id: 7,
    title: "Humans",
    description: "Humans depend  animals for survival.",
    image: "/photo/humans.jpg",
  },
  {
    id:8,
    title:"Myntra clone",
    description:"Html,CSS,javascript",
    image:"/photo/human.jps",
  }
];

const Project = () => {
  return (
    <Box sx={{ px: { xs: 3, md: 8 }, py: 5, textAlign: "center", margin: 4}}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        My Projects
      </Typography>
      <Box container spacing={4} justifyContent="center" display="flex">
        {projects.map((project) => (
          <Box item key={project.id} xs={12} sm={6} md={4} >
            <Card sx={{ maxWidth: 345, boxShadow: 3, boxShadow: "0px 0px 10px #00FFFF", borderRadius: 2, color:"white", background:"black",border:"2px cyan solid" , bgcolor:"#121212" }}>
              <CardMedia>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={345}
                  height={180}
                  style={{ objectFit: "cover", borderRadius: "8px 8px 0 0" }}
                />
              </CardMedia>
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  {project.title}
                </Typography>
                <Typography variant="body2">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button variant="contained" color="primary">
                  View
                </Button>
                <Button variant="outlined" color="secondary">
                  Code
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Project;
