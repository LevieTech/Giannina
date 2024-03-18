import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import WbSunnyIcon from '@mui/icons-material/WbSunny';




function Nav() {
  const user = useSelector((store) => store.user);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="nav">
      <div className="nav-title" onClick={() => scrollToSection('header')}>
      <Avatar alt="Giannina" src="/images/Giannina.png" />
     <hr/>
      <WbSunnyIcon fontSize="large" style={{ color: '#DBAD00', filter: "drop-shadow(3px 2px 4px rgba(0, 0, 0, 2.5))", marginLeft: '20px',  }} />
        <Link to="/user">
          <h2>
         Giannina 
          </h2>
        </Link>
      </div>
      <div className="nav-links">
        {/* <Link to="/home">Home</Link> */}
        <p onClick={() => scrollToSection('biopage')}>Meet Giannina</p>
        <p onClick={() => scrollToSection('home')}style={{ marginLeft: '20px', marginRight: '20px' }}>Links</p>
        <p onClick={() => scrollToSection('contactg')}>Contact Giannina</p>
        <p onClick={() => scrollToSection('services')}style={{ marginLeft: '20px', marginRight: '20px' }}>Services</p>
      </div>
    </div>
  );
}

export default Nav;

