import React from 'react';
import{Route} from 'react-router-dom';
import SignupContainer from './session_form/signup_container';
import SessionShowContainer from './session_bar/session_show_container';

const App = () => (
    <div>
        <SessionShowContainer/>
        <Route path="/signup" component={SignupContainer}/>
    </div>
)

export default App;

