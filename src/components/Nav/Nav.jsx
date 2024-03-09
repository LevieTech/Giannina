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

      <center className="title-img" >
        <Link to="/user">
          <img alt="Giannina" src="/images/G-logo.png" />
        </Link>
      </center>

      <div className="nav-links">
        {/* <Link to="/home">Home</Link> */}
        <Link to="/biopage">Bio</Link>
        <Link to="/home">Links</Link>
        <Link to="/contactg">Contact Giannina</Link>
      </div>
    </>
  );
}

export default Nav;

