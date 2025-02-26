import { Box } from '@mui/material';
import React from 'react';
import Html from '../photo/Html.png';
import JavaScript from '../photo/Js.png';
import CSS from '../photo/CSS.png';
import Figma from '../photo/Figma.png';
import nodejs from '../photo/nodejs.png';
import canva from '../photo/canva.png';
import Image from 'next/image';

const skills = [
  { src: Html, alt: "HTML" },
  { src: JavaScript, alt: "JavaScript" },
  { src: CSS, alt: "CSS" },
  { src: Figma, alt: "Figma" },
  { src: nodejs, alt: "Node.js" },
  { src: canva, alt: "Canva" },
];

function Expfoot() {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap', padding: 2 }}>
      {skills.map((skill, index) => (
        <Image 
          key={index} 
          src={skill.src} 
          alt={skill.alt} 
          style={{ width: 90, height: 40 }} 
          loading="lazy" 
        />
      ))}
    </Box>
  );
}


export default Expfoot;
