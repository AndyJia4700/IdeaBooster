import { connect } from "react-redux";
import React from 'react';
import {Link} from 'react-router-dom';
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

// const mSTP = ({ errors }) =>({
//     errors: errors.session,
//     formType: 'signup',
//     navLink: <Link to="/login">Please sign in</Link>
// })

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user))
});

export default connect(mDTP)(SessionForm)