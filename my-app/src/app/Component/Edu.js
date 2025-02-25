import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Item = ({ children }) => (
  <Box sx={{ padding: 2, backgroundColor: 'black', borderRadius: 2, textAlign: 'center' }} className='border-cyan-500 border-2 shadow-lg shadow-slate-500 '>
    {children}
  </Box>
);

const Edu = () => {
  return (
    <Box color={'white'} sx={{ width: '100%', textAlign: 'center', padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 ,color:'white'}}>
        Education
      </Typography>
      <Stack spacing={2} sx={{ width: "60%", margin: "auto", alignItems: "center" }}>
      <Item>
        <h1>10th CBSE</h1>
        <p>Kendriya Vidyalaya Santragachi</p>
      </Item>

      <div style={{ display: "flex", alignItems: "center", height: "50px" }}>
        <div
          style={{
            borderLeft: "2px solid white",
            height: "50px",
          }}
        ></div>
      </div>

      <Item>Item 2</Item>
      <div style={{ display: "flex", alignItems: "center", height: "50px" }}>
        <div
          style={{
            borderLeft: "2px solid white",
            height: "50px",
          }}
        ></div>
      </div>
      <Item>Item 3</Item>
    </Stack>
    </Box>
  );
};

export default Edu;
