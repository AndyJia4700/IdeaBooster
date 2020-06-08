import React from 'react';
import { Link } from 'react-router-dom';

class WelcomeBar extends React.Component{
    render() {
        return(
            <div className="">
                {/* <p>start</p> */}
                <img src={window.welcomeURL} className="welcome-gif"/>
                <div className="welcome-word">
                    <div>
                    <h1 className="Big-font">Bring your creative project to life.</h1>
                        <button className="start-button">
                            Get started
                        </button>
                    </div>
                </div>
                <p>end</p>
            </div>
        )
    }
}

export default WelcomeBar;