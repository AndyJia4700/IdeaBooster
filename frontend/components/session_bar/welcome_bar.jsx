import React from 'react';

class WelcomeBar extends React.Component{
    render() {
        return(
            <div className="">
                <p>start</p>
                <img src={window.welcomeURL} className="welcome-gif"/>
                <div className="welcome-word">
                    <div>
                    <h1>Bring your creative project to life.</h1>
                        <button>
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