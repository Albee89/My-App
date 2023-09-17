import Aboutstyle from "./about.module.css";
import * as React from 'react';
import Box from '@mui/material/Box';


export default function About() {
    
    return (
        <div className="About">
        <div id="#About"></div>
        
        <div className={Aboutstyle.About}>
        <h3>About Us</h3>
        <div className={Aboutstyle.grow}>
        <Box sx={{ 
        FontWeight: 'fontWeightLight',
        width: 300,
        height: 200,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        
        },
      }}
    >
        For over 25 years, Sunshine Jets Soccer Club
        has been home to atheletes and families Sed 
        piciatis unde omnis iste natus error sit v
        tem accu santium doloremque laudantium, tot 
        rem aperiam, eaque ipsash ab illoili inventor
        ritatis et quasi architecto beatae vitae dicta. 
        Nemo e nis iste natus error sit voluptatem accu.
    </Box>

        </div>
        </div>
        </div>
    );
};

