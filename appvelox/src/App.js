import React, { useEffect } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import Routes from './components/routes/Routes';
import axios from 'axios';
import { connect } from 'react-redux';
import {userSucces, userExit} from './redux/actions/loginAction';

axios.defaults.baseURL = 'http://localhost:5000/api/';

const App = ({userSucces, auth}) => {

  useEffect(() => {

    const data = localStorage.getItem('token');

    if(data) {

      userSucces();
      return;

    }

    userExit();

  }, [userSucces, userExit]);

  return (
    <Router>
      <Routes auth={auth}/>
    </Router>
  );
};

const mapStateToProps = (state) => {

  return {
    auth: state.user.auth
  };

};

const mapDispathToProps = {
  userSucces,
  userExit,
};

export default connect(mapStateToProps, mapDispathToProps)(App);