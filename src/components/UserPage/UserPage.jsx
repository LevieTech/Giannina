import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { Card, Typography } from '@mui/material';
import './UserPage.css';
function UserPage() {
  const user = useSelector((store) => store.user);


  return (
    <center>
      <div className='userPage'>
        <Typography variant="h6"> Hi, I'm Giannina Hall!</Typography>
        <Typography className="animate-text" variant="h4"> Welcome! </Typography>

        <div className='photoContainer'>
          <img height={400} src="/images/Giannina.png" alt="Giannina Photo" />
        </div>

      </div>

      <hr className='userHr' />

      <h3 className="introCard">Are you feeling stuck, yearning for
        more, yet unsure of the path forward? <br /> <br />

        Life often presents us with challenges, uncertainties,
        and moments where we crave growth but aren't quite sure
        how to navigate it. <br /> <br />

        It's during these times that having
        the right guidance and support can make all the difference!
      </h3>

      <hr className='userHr' />

      <Typography variant="h4">
        Available for Lifestyle & Wellness coaching
      </Typography>
      
      <button className="btn"> Contact </button>

    </center>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
