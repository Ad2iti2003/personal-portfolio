
import { Box, Button } from '@mui/material';
import React from 'react';

function Nav() {
  return (
    <Box 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center" 
      px={3} 
      py={2} 
      top={0}
      position={'sticky'}
      zIndex={1}
     
    >
      
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }} className='text-cyan-500 '>
        Aditi's Portfolio
      </div>

      {/* Navigation */}
      <Box display="flex" gap={2}>
        <Button variant="text" color='white' className=' rounded-2xl'><a href="/" className='hover:underline hover:decoration-cyan-500 hover:underline-offset-8 hover:text-slate-200'>Home</a></Button>
        <Button variant="text" color='white' className=' rounded-2xl'><a href="/" className='hover:underline hover:decoration-cyan-500 hover:underline-offset-8 hover:text-slate-200'>About</a></Button>
        <Button variant="text" color='white' className=' rounded-2xl'><a href="/" className='hover:underline hover:decoration-cyan-500 hover:underline-offset-8 hover:text-slate-200'>Projects</a></Button>
        <Button variant="text" color='white' className=' rounded-2xl'><a href="/" className='hover:underline hover:decoration-cyan-500 hover:underline-offset-8 hover:text-slate-200'>Contact</a></Button>
      </Box>
    </Box>
  );
}

export default Nav;
