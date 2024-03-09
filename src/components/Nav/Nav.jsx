import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';




function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <>
    <div className='nav'>
       <center>
      <div className="title-img">
        <Link to="/user">
          <img alt="Giannina" src="/images/G-logo.png" />
        </Link>
      </div>
    </center>


      <div className="nav-links">
        {/* <Link to="/home">Home</Link> */}
        <Link className="linkItem" to="/biopage">Bio</Link>
        <Link className="linkItem" to="/home">Links</Link>
        <Link className="linkItem" to="/contactg">Contact Giannina</Link>
      </div>
      </div>
    </>
  );
}

export default Nav;

