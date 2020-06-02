import { connect } from "react-redux";
import React from 'react';
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mSTP = (state) => ({
    formType: 'login',
    navLink: <Link to="/signup">Please Sign up</Link>
});

const mDTP = dispatch => ({
    login: formUser => dispatch(login(formUser))
});

export default connect(mSTP, mDTP)(LoginForm)