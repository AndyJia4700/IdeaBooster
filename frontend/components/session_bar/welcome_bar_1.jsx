import React from 'react';

class WelcomeBar1 extends React.Component {

    render() {
        return (
            <div className="welcome-div">
                <div className="welcome-div-title">
                    <h1 className="welcome-title">First, let's get your set up.</h1>
               </div>

                <div className="welcome-div-intro">
                    <p className="welcome-intro">Pick a project category to connect with a specific community.
                    <br/>
                    You can always update this later.</p>
               </div>

                <div className="welcome-div-select">
                    <select className="welcome-category">
                        <option value="1">Arts</option>
                        <option value="2">Comic & Illustration</option>
                        <option value="3">Design & Tech</option>
                        <option value="4">Film</option>
                        <option value="5">Food & Craft</option>
                        <option value="6">Games</option>
                        <option value="7">Music</option>
                        <option value="8">Publishing</option>
                    </select>
               </div>

                <div className="welcome-div-button">
                   <span>Hello again!</span>
                    <a href="#/projects/hello2">
                        <button className="welcome-button">Next: Project idea</button>
                    </a>
               </div>
            </div>
        )
    }
}

export default WelcomeBar1;