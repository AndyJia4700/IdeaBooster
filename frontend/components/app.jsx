import React from 'react';
import {Route} from 'react-router-dom';
import SignupContainer from './session_form/signup_container';
import LoginContainer from './session_form/login_container';
import SessionShowContainer from './session_bar/session_show_container';
import { AuthRoute } from '../util/route_utils';

import WelcomeBar from './session_bar/welcome_bar';
import ProjectIndexContainer from './projects/project_index_container';
import ProjectCreateContainer from './projects/create_project_form_container';
import ProjectShowContainer from './projects/project_show_container';
import ProjectEditContainer from './projects/edit_project_form_container';
import splashPage from './projects/splash_page';


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

                <Route exact path="/projects/hello" component={WelcomeBar} />
                <Route exact path="/" component={splashPage} />     
                <Route exact path="/projects" component={ProjectIndexContainer} />
                <Route exact path="/projects/:projectId" component={ProjectShowContainer}/>
                <Route exact path="/projects/:projectId/edit" component={ProjectEditContainer}/>
                <Route exact path="/projects/new" component={ProjectCreateContainer} />
                
                <div className="div-session-background">
                    <br />
                    <div className="div-session-box">

                        <AuthRoute path="/signup" component={SignupContainer} />
                        <AuthRoute path="/login" component={LoginContainer} />
                
                    
                    </div>
                    <br />
                </div>

                <div className="footer">
                    <div>
                        <p className="footer">Cloned by Andrew Jia</p>
                    </div>
                    
                    <div className="logo">
                        <a className="github" href="https://github.com/AndyJia4700">
                            <img src={window.githubURL} className="logo-icon"/>
                        </a>
                        
                        <a className="linkedin" href="https://www.linkedin.com/in/andy-jia-89a261114/">
                            <img src={window.linkedinURL} className="logo-icon"/>
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}

export default App;

