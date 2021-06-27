import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../auth/login/Login';
import Restore from '../auth/restore/Restore';
import Password from '../auth/restore/password/Password';
import Register from '../auth/register/Register';
import RegisteSucces from '../auth/register/registerSucces/RegisteSucces';
import Main from './../main/Main'
import Profile from '../main/profile/Profile';
import MainTemplate from '../main/mainTemplate/MainTemplate';
import MyRecords from '../main/profile/profileRecords/MyRecords';
import Doctors from '../main/doctors/Doctors';

const Routes = ({auth}) => {

    if(!auth) {
        return (
            <Switch>
                <Route path="/login" exact><Login /></Route>
                <Route path="/register" exact><Register /></Route>
                <Route path="/restore" exact><Restore /></Route>
                <Route path="/restore/password" exact><Password /></Route>
                <Route path="/register/succes" exact><RegisteSucces /></Route>
                <Redirect to="/login"/>
            </Switch>
        )
    } 
    return (
        <Switch>
            <Route path="/" exact><Main /></Route>
            <Route path="/profile" exact><Profile /></Route>
            <Route path="/profile/myrecords" exact><MyRecords /></Route>
            <Route path="/doctors" exact><Doctors /></Route>
            <Route path="/massage" exact><MainTemplate /></Route>
            <Redirect to="/"/>
        </Switch>
    );
};


export default Routes;