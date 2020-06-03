import { connect } from "react-redux";
import React from 'react';
import {Link} from 'react-router-dom';
import { createNewUser } from "../../actions/session_actions";
import SignupForm from "./signup_form";

// const mSTP = (state) =>({
//     // errors: errors.session,
//     formType: 'Create account',
//     navLink: <Link to="/login">Log in</Link>
// })
const mSTP = ({errors}) =>({
    errors: errors,
    formType: 'Create account',
    navLink: <Link to="/login">Log in</Link>
})

const mDTP = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser))
});

export default connect(mSTP, mDTP)(SignupForm)