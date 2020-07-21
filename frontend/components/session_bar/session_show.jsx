import React from 'react';
import {Link} from 'react-router-dom';

const SessionShow = ({ currentUser, openModal}) => {
    const sessionLinks = () => (
        <nav>
        <Link to="/login" className="login-button">login</Link>
        </nav>
    );

    const greeting = () => (
        <nav className="nav-greeting">
            <div className="dropdown">
                <a className="login-button" onClick={() => openModal('profileDropDown')}>
                    <span className="modal-button">
                        {currentUser.username}
                    </span>
                </a>
            </div>
        </nav>
    );

    return currentUser ? greeting() : sessionLinks();
};

export default SessionShow;