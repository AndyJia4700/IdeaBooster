import React from 'react';
import {Route} from 'react-router-dom';
import SignupContainer from './session_form/signup_container';
import LoginContainer from './session_form/login_container';
import SessionShowContainer from './session_bar/session_show_container';
import { AuthRoute } from '../util/route_utils';


const App = () => (
    <div>
        <SessionShowContainer/>
        <AuthRoute path="/signup" component={SignupContainer}/>
        <AuthRoute path="/login" component={LoginContainer}/>
    </div>
)

export default App;

