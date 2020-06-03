import React from 'react';
import {Link} from 'react-router-dom';

const SessionShow = ({ currentUser, logout}) => {
// const SessionShow = () => {
    const sessionLinks = () => (
        <nav>
        <Link to="/login" className="login-button">login</Link>
        {/* <Link to="/signup">Sign Up</Link> */}
        </nav>
    );
    // return sessionLinks();

    const greeting = () => (
        <nav className="nav-greeting">
            <a className="login-button">Hi {currentUser.username}</a>
            <button onClick={logout}>Logout</button>
        </nav>
    );
    return currentUser ? greeting() : sessionLinks();
};

export default SessionShow;