import React from 'react';
import { connect } from 'react-redux';

const mSTP = (state) => {
    return {
        currentUser: state.session.currentUser,
    }
};

class WelcomeBar extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const checkCurrentUser = (
            (!this.props.currentUser) ? <a href="#/login" className="project-show-subdiv2-back-button">Get started</a> : <a href="#/projects/hello1" className="project-show-subdiv2-back-button">Get started</a>
        );
        
        return(
                <div className="welcome">
                    <div className="welcome-gif-div">
                        <img src={window.welcomeURL} className="welcome-gif"/>
                        <div className="welcome-word">
                            <div>
                                <h1 className="Big-font">Bring your creative project to life.</h1>
                                {checkCurrentUser}
                                {/* <button className="welcomebutton">Get started</button> */}
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
        )
    }
}

export default connect(mSTP, null)(WelcomeBar);