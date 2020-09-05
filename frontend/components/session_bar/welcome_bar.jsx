import React from 'react';
import { Link } from 'react-router-dom';

class WelcomeBar extends React.Component{
    render() {
        
        return(
            // <div>
                <div className="welcome">
                    <div className="welcome-gif-div">
                        <img src={window.welcomeURL} className="welcome-gif"/>
                        <div className="welcome-word">
                            <div>
                                <h1 className="Big-font">Bring your creative project to life.</h1>
                                <a href="#/projects/hello1">
                                <button className="welcomebutton">Get started</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="Welcome-intro-div">
                        <ul className="Welcome-intro-li">
                            <li>How it works</li>
                            <li>Inspiration</li>
                            <li>Why Ideabooster</li>
                            <li>Open calls</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>  
            // </div>
        )
    }
}

export default WelcomeBar;