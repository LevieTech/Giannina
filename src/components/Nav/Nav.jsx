import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">
          Prime Solo Project
        </h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null && (
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/echarts">
              ECharts
            </Link>
            <Link className="navLink" to="/family_size">
              Family Size
            </Link>
            <Link className="navLink" to="/user">
              Home
            </Link>
            <Link className="navLink" to="/info">
              Info Page
            </Link>
            <Link className="navLink" to="/my_trips">
              My Trips
            </Link>
            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import LogOutButton from '../LogOutButton/LogOutButton';
// import './Nav.css';
// import { useSelector } from 'react-redux';


// function Nav() {
//   const user = useSelector((store) => store.user);


//   return (
//     <div className="nav">
//       <Link to="/home">
//         <h2 className="nav-title">
//           Prime Solo Project
//         </h2>
//       </Link>
//       <div>
//         {/* If no user is logged in, show these links */}
//         {user.id === null && (
//           <Link className="navLink" to="/login">
//             Login / Register
//           </Link>
//         )}

//         {/* If a user is logged in, show these links */}
//         {user.id && (
//           <>

//             <Link className="navLink" to="/echarts">
//               echarts
//             </Link>

//             <Link className="navLink" to="/familySize">
//               family size
//             </Link>



//             <Link className="navLink" to="/user">
//               Home
//             </Link>

//             <Link className="navLink" to="/info">
//               Info Page
//             </Link>

//             <Link className="navLink" to="/my_trips">
//               My Trips
//             </Link>

//             <LogOutButton className="navLink" />
//           </>
//         )}

//         <Link className="navLink" to="/about">
//           About
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Nav;

