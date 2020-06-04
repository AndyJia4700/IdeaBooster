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
            <div className="dropdown">
                <a className="login-button"><span className="modal-button">{currentUser.username}</span></a>
                <div className="dropdown-content">
                     <button onClick={logout}>Logout</button>
                </div>
            </div>
        </nav>
    );
    return currentUser ? greeting() : sessionLinks();
};

export default SessionShow;