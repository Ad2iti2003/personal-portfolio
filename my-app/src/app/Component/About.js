import React from 'react'
import { Box } from '@mui/material'
import Experiance from './Experiance'

const About = () => {
  return (
    <Box 
    
    justifyContent="space-between"
    alignItems="center"
    px={5}
    py={5}
    flexDirection={{ xs: "column", md: "row" }} >
        <h1 className='text-center flex justify-center text-4xl'>About</h1>
        <Box paddingY={10} letterSpacing={2} lineHeight={2}>
        <p>Hi! I'm <b className='text-cyan-300'>Aditi Kumari</b> , a passionate web developer with a strong foundation in both <b className='text-cyan-300'>front-end</b> and <b className='text-cyan-300'>back-end</b> technologies. I enjoy building <b className='italic text-orange-300'>interactive</b> and <b className='italic text-orange-300'>user-friendly</b> applications that enhance user experiences.</p>
        <p>With hands-on experience as a <b className='italic text-orange-300'>Website Developer Intern</b> at <b className='text-cyan-300'>Greyspire Innovation India Pvt Ltd</b> and <b className='text-cyan-300'>Bharat Chase</b>, I have worked on projects ranging from <b className='text-orange-300'>landing pages</b> and <b className='text-orange-300'>admin dashboards</b> to <b className='text-orange-300'>performance optimization</b> and <b className='text-orange-300'>UI/UX improvements</b>. My expertise lies in <samp className='text-cyan-300'>JavaScript</samp>, <samp className='text-cyan-300'>React.js</samp>, <samp className='text-cyan-300'>Next.js</samp>, <samp className='text-cyan-300'>Express.js</samp>, <samp className='text-cyan-300'>Tailwind CSS</samp>, <samp className='text-cyan-300'>Material UI</samp>, and <samp className='text-cyan-300'>MySQL</samp>.</p>
        <p>I am always eager to learn new technologies and contribute to innovative projects. Whether it's developing scalable web applications or optimizing website performance, I thrive on problem-solving and creating meaningful digital experiences.</p>
        </Box>

        <Experiance/>
        


    </Box>
  )
}

export default About
