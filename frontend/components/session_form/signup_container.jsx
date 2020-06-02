import { connect } from "react-redux";
import React from 'react';
import {Link} from 'react-router-dom';
import { signup } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mSTP = (state) =>({
    // errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">Please sign in</Link>
})

const mDTP = dispatch => ({
    processForm: formUser => dispatch(signup(formUser))
});

export default connect(mSTP, mDTP)(SignupForm)