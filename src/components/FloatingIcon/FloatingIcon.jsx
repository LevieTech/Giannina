import React from "react";
import Avatar from '@mui/material/Avatar';
import { Typography } from "@mui/material";

function FloatingIcon() {
  return (
    <div style={{
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
        <Avatar alt="Giannina's Photo" src="/images/Giannina.png" style={{ width: '50px', height: '50px' }} />
      </a>
      <Typography style={{
        color: 'black',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        fontFamily: 'italic',
        textAlign: 'center',
        fontSize: '14px',
        marginTop: '5px',
      }}>Click here to <br></br> schedule a chat</Typography>
    </div>
  );
}

export default FloatingIcon;
