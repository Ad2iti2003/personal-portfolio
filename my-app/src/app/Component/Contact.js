import { Box, Container, TextField, Typography, Button } from '@mui/material';
import React from 'react';
import {GitHub} from '@mui/icons-material'
import { LinkedIn } from "@mui/icons-material";
import { Email } from "@mui/icons-material";

function Contact() {
  return (
    <Box 
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      width="100%"
      minHeight="100vh"
      
      color="#ffffff" 
      px={4}
      py={6}
    >
      {/* Left Section */}
      <Box width={{ xs: "100%", md: "50%" }} p={6}>
        <Container 
          sx={{
            p: 4,
            border: "2px solid #00FFFF",
            borderRadius: 2,
            backgroundColor: "#1E1E1E",
            boxShadow: "0px 0px 10px #00FFFF",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Let's Connect
          </Typography>

          {/* Contact Form */}
          <form action="/search">
            <TextField
              fullWidth
              id="name"
              label="Your Name"
              variant="filled"
              InputLabelProps={{ style: { color: "#ffffff" } }}
              InputProps={{ style: { color: "#ffffff" } }} 
              sx={{ backgroundColor: "#2A2A2A", borderRadius: 1, mb: 2 }}
            />
            <TextField
              fullWidth
              id="email"
              label="Your Email"
              variant="filled"
              InputLabelProps={{ style: { color: "#ffffff" } }}
              InputProps={{ style: { color: "#ffffff" } }} 
              sx={{ backgroundColor: "#2A2A2A", borderRadius: 1, mb: 2 }}
            />
            <TextField
              fullWidth
              id="message"
              label="Your Message"
              variant="filled"
              multiline
              rows={4}
              InputLabelProps={{ style: { color: "#ffffff" } }}
              InputProps={{ style: { color: "#ffffff" } }}
              sx={{ backgroundColor: "#2A2A2A", borderRadius: 1, mb: 3 }}
            />

            <Button 
              type="submit" 
              variant="contained" 
              sx={{
                backgroundColor: "#00FFFF",
                color: "#121212",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#00CED1" }
              }}
              fullWidth
            >
              Submit
            </Button>
          </form>
          <div className="flex gap-x-8 mt-5 justify-center">
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
        </Container>
         
      </Box>

      {/* Right Section (For Future Use) */}
      <Box 
        width={{ xs: "100%", md: "50%" }} 
        display="flex" 
        justifyContent="center" 
        alignItems="center"
      >
        <Typography variant="h5" sx={{ opacity: 0.6 }}>
          Contact me for collaboration!
        </Typography>
      </Box>
    </Box>
  );
}

export default Contact;


