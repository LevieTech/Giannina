import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  
  return (
    <div className="container">
      <header className="App-header">
        <h2 className="App-subtitle">Are you feeling stuck, yearning for more, yet unsure of the path forward? Life often presents us with challenges, uncertainties, and moments where we crave growth but aren't quite sure how to navigate it. It's during these times that having the right guidance and support can make all the difference! Hi im Giannina Cochina!
        </h2>
        <img className="avatar-image" src="/images/Giannina.png" alt="Giannina" />
      </header>
     
     
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
