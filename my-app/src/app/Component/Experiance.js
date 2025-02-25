import { Box, Button, Container } from '@mui/material'
import React from 'react'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SchoolIcon from '@mui/icons-material/School';
import Work from './work';
import Skill from './Skill';
import Edu from './Edu';

function Experiance() {
  return (
    <Container className='border-2  border-cyan-500 shadow-md shadow-slate-400 h-auto'>
        <Box display="flex" gap={2}>
      <Button
        variant="text"
        component="a"
        href="/"
        sx={{
          color: "white",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          "&:hover": {
            textDecoration: "underline",
            textDecorationColor: "cyan",
            textUnderlineOffset: "8px",
            color: "rgb(226 232 240)", 
          },
        }}
      >
        <BusinessCenterIcon sx={{  fontSize: 28  }} /> Experience
      </Button>

      <Button
        variant="text"
        component="a"
        href="/"
        sx={{
          color: "white",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          "&:hover": {
            textDecoration: "underline",
            textDecorationColor: "cyan",
            textUnderlineOffset: "8px",
            color: "rgb(226 232 240)",
          },
        }}
      >
        <AutoGraphIcon sx={{fontSize: 28  }} /> Skill
      </Button>

      <Button
        variant="text"
        component="a"
        href="/"
        sx={{
          color: "white",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          "&:hover": {
            textDecoration: "underline",
            textDecorationColor: "cyan",
            textUnderlineOffset: "8px",
            color: "rgb(226 232 240)",
          },
        }}
      >
        <SchoolIcon sx={{fontSize: 28  }} /> Education
      </Button>
    </Box>
    <Work/>
    <Skill/>
    <Edu/>
    </Container>
  )
}

export default Experiance
