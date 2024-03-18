import React from "react";
import Avatar from '@mui/material/Avatar';
import { Typography } from "@mui/material";
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function FloatingIcon() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#90BBD9',
      padding: '15px',
      borderRadius: '50%',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      zIndex: '1000', // Ensure it appears above other content
    }}>
      <a href="https://calendly.com/gninag/fit-call" target="_blank" rel="noopener noreferrer">
      <WbSunnyIcon fontSize="medium" style={{ color: '#DBAD00', filter: "drop-shadow(3px 2px 4px rgba(0, 0, 0, 2.5))", position: 'absolute', top: '1px', left: '50%', transform: 'translateX(-50%)' }} />
        <Avatar alt="Giannina's Photo" src="/images/Giannina.png" style={{ width: '50px', height: '50px' }} />
      </a>
    
      <Typography style={{
        color: 'black',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        fontFamily: 'italic',
        textAlign: 'center',
        fontSize: '14px',
       
      }}>Click to  schedule a chat</Typography>
    </div>
  );
}

export default FloatingIcon;
