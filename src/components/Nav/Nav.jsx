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
          <h2>Coach
            Giannina Cochina
          </h2>
        </Link>
      </div>
      <div className="nav-links">
        {/* <Link to="/home">Home</Link> */}
        <Link to="/biopage">Bio</Link>
        <Link to="/home">About</Link>
        <Link to="/contactg">Contact Giannina</Link>
      </div>
    </div>
  );
}

export default Nav;

