import React from 'react';
import {Link} from 'react-router-dom';
// import { fetchProject } from '../../actions/project_actions';

class ProjectShow extends React.Component{
    constructor(props){
        super(props);
        // debugger
    }

    componentDidMount(){
        // debugger;
        const projectId = this.props.match.params.projectId
        this.props.fetchProject(projectId);
    }

    componentDidUpdate(){
        const projectId = this.props.match.params.projectId
        this.props.fetchProject(projectId);
    }


    render(){
        const {project} = this.props
        // debugger;
        if (!project) return null;
        return(
            <div className="project-show-div">
                <div className="project-show-subdiv1">
                    <h1 className="project-show-h">{project.title}</h1>
                    <p className="project-show-h">{project.subtitle}</p>
                </div>

                <div className="project-show-subdiv2">

                    <div className="project-show-pic-div">
                        <img className="project-show-pic" src={project.pictureUrl} />
                        <p>{project.location_id}</p>
                    </div>

                    <div className="project-show-subdiv2-back">

                        <div className="project-show-subdiv2-back-top">
                            <p></p>
                        </div>

                        <div className="project-show-subdiv2-back-money-div">
                            <p className="project-show-subdiv2-back-money">$500</p>
                            <p>pledged of ${project.funding_goal} goal</p>
                        </div>

                        <div className="project-show-subdiv2-back-backer">
                            <p>35 backers</p>
                        </div>


                        <a className="project-show-subdiv2-back-a" href="">
                            <button className="project-show-subdiv2-back-button"><span>Back this project</span></button>
                        </a>
                    </div>
                
                </div>

                <div>
                    <ul>
                        <li>Campaign</li>
                        <li>FAQ</li>
                        <li>Updates</li>
                        <li>Comments</li>
                        <li>Community</li>
                    </ul>
                </div>

                <div className="story-user-div">
                    <div className="story-div">
                        <h3>Story</h3>
                        <p></p>
                    </div>

                    <div className="user-div">
                        <div>
                            <h4>creator</h4>
                        </div>

                        <div>
                            <h3>Support</h3>
                            <label>Make a pledeg without a reward
                                <input type="number"
                                />
                            </label>
                        </div>
                        
                    </div>
                </div>

            </div>
        );
    }
}

export default ProjectShow;