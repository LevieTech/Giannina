import React, { useEffect } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import HomePage from '../HomePage/HomePage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/Bio';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

import './App.css';
import BioPage from '../InfoPage/Bio';
import ContactG from '../Contact/ContactG';



function App() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Redirect exact from="/" to="/user" />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/login">
            {user.id ? (
              <Redirect to="/user" />
            ) : (
              <LoginPage />
            )}
          </Route>
          <Route exact path="/registration">
            {user.id ? (
              <Redirect to="/user" />
            ) : (
              <RegisterPage />
            )}
          </Route>
          <Route exact path="/home">
            {user.id ? (
              <Redirect to="/user" />
            ) : (
              <LandingPage />
            )}
          </Route>
          <Route exact path="/user" component={UserPage} />
          <Route exact path="/biopage" component={BioPage} />
          <Route exact path="/contactg" component={ContactG} />
  
          <Route>






            <h1>404 - Page Not Found</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
