import React from "react";
import Box from "@mui/material/Box";
import img from "../photo/Aditi.jpg"
import Image from "next/image";
import {GitHub} from '@mui/icons-material'
import { LinkedIn } from "@mui/icons-material";
import { Email } from "@mui/icons-material";


function Home() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={3}
      py={2}
      flexDirection={{ xs: "column", md: "row" }} 
    >
      
      <Box p={4} className="w-auto h-auto">
        <Image 
          src={img} 
          alt="Aditi Kumari"
         
          
          className="rounded-full w-96 shadow-lg shadow-cyan-300 animate-pulse hover:animate-none object-cover" 
        />
      </Box>

      
      <Box p={10} marginRight={10} lineHeight='2' letterSpacing="5px">
        <h1 className="text-4xl leading-3">Hello, I'm</h1>
        <h1 className="text-6xl hover:text-orange-300 animate-pulse leading-loose">Aditi Kumari</h1>

        
        <h6
          className="text-2xl text-cyan-300 hover:animate-pulse animate-bounce leading-loose"
          
        >
          Software Developer
        </h6>
        <div className="flex gap-x-8 justify-center">
          <div>
            <button className="shadow-md shadow-cyan-300 hover:shadow-lg rounded-full hover:shadow-cyan-300 hover:scale-x-125"><a href=""><GitHub/></a></button>
          </div>
          <div>
            <button className="shadow-md shadow-cyan-300 hover:shadow-lg rounded-full hover:shadow-cyan-300 hover:scale-x-125"><a href=""><LinkedIn/></a></button>
          </div>
          <div>
            <button className="shadow-md shadow-cyan-300 hover:shadow-lg rounded-full hover:shadow-cyan-300 hover:scale-x-125"><a href=""><Email/></a></button>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default Home;

