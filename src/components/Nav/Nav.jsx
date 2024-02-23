import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';




function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <div className="nav-title">
      <Avatar alt="Giannina" src="/images/Giannina.png" />
        <Link to="/home">
          <h2>Coach Cochi</h2>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/info">Info Page</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Nav;

