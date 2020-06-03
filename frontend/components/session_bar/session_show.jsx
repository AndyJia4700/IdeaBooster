import React from 'react';
import {Link} from 'react-router-dom';

const SessionShow = ({ currentUser, logout}) => {
// const SessionShow = () => {
    const sessionLinks = () => (
        <nav>
        <Link to="/login">login</Link>
        {/* <Link to="/signup">Sign Up</Link> */}
        </nav>
    );
    // return sessionLinks();

    const greeting = () => (
        <nav className="nav-greeting">
            <h4>Hi {currentUser.username}</h4>
            <button onClick={logout}>Logout</button>
        </nav>
    );
    return currentUser ? greeting() : sessionLinks();
};

export default SessionShow;