import { connect } from "react-redux";
import React from 'react';
import {Link} from 'react-router-dom';
import { createNewUser } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mSTP = (state) =>({
    // errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">Please sign in</Link>
})

const mDTP = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser))
});

export default connect(mSTP, mDTP)(SignupForm)