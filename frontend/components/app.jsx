import React from 'react';
import {Route} from 'react-router-dom';
import SignupContainer from './session_form/signup_container';
import LoginContainer from './session_form/login_container';
import SessionShowContainer from './session_bar/session_show_container';
import { AuthRoute } from '../util/route_utils';

import WelcomeBar from './session_bar/welcome_bar';
import ProjectIndexContainer from './projects/project_index_container';
import ProjectCreateContainer from './projects/create_project_form_container';


class App extends React.Component{

    render(){
        return(
            <div >

                <nav className="top-bar">
                    <div className="explore-start">
                        <div className="explore">
                            {/* <h4 className="top-font">Explore</h4> */}
                            <a className="top-font" href="/#/projects">Explore</a>
                        </div>

                        <div className="start">
                            {/* <h4 className="top-font">Start a project</h4> */}
                            <a className="top-font" href="/#/projects/hello">Start a project</a>
                        </div>
                    </div>

                    {/* <div className="ideaBooster-icon">IdeaBooster</div> */}
                    <a href="/" className="ideaBooster-icon">IdeaBooster</a>
                    <br/>
                    <div className="search-login">
                        <div className="search">
                            <h4 className="top-font">Search <i className="fas fa-search"></i></h4>
                        </div>

                        <div className="login-button">
                            <h4 className="top-font"><SessionShowContainer /></h4>
                        </div>
                    </div>

                </nav>

                <div className="div-session-background">
                    <br />
                    <div className="div-session-box">
                        <AuthRoute path="/signup" component={SignupContainer} />
                        <AuthRoute path="/login" component={LoginContainer} />
                        <Route path="/projects/hello" component={WelcomeBar} />
                        <Route path="/projects" component={ProjectIndexContainer} />
                        <Route path="/projects/new" component={ProjectCreateContainer} />
                    </div>
                    <br />
                </div>

                <div className="footer">
                    <p className="footer">Cloned by Andrew Jia</p>
                    <div className="github">
                        <a className="github" href="https://github.com/AndyJia4700">github</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default App;

