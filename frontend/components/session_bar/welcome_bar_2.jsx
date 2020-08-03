import React from 'react';

class WelcomeBar2 extends React.Component {
    

    render() {
        return (
            <div className="welcome-div">
                <div className="welcome-div-title">
                    <h1 className="welcome-title">Describe what you'll be creating.</h1>
                </div>

                <div className="welcome-div-intro">
                    <p className="welcome-intro">And don't worry, you can edit this later, too.</p>
                </div>

                <div className="welcome-div-select">
                    <textarea 
                        id="welcome-subtitle"
                        className="welcome-category"
                        placeholder="A documentary about the history of shoes."
                    />
                </div>

                <div className="welcome-div-button">
                    <a href="#/projects/hello1">
                        <button>Categroy</button>
                    </a>

                    <a href="#/projects/hello3">
                        <button>Next: Location</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default WelcomeBar2;