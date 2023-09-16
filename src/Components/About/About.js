import Aboutstyle from "./about.module.css";
import * as React from 'react';
import Box from '@mui/material/Box';


export default function About() {
    
    return (
        <div className="About">
         <div className={Aboutstyle.grow}>
        <h2>About Us</h2>
        <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />

        </div>
        </div>
    );
};

