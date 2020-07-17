import React from 'react';
import {Link} from 'react-router-dom';
// import { fetchProjects } from '../../actions/project_actions';
import RewardsShowContainer from '../rewards/rewards_show_container'

class ProjectShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // debugger;
        const projectId = this.props.match.params.projectId
        // debugger;
        this.props.fetchProjects();
        this.props.fetchProject(projectId);

        this.props.fetchRewards();
        // this.props.fetchReward(projectId);
        
    }

    render(){
        const {project, reward} = this.props
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
                        
                            <form action="" className="project-show-subdiv2-back-a">
                                {
                                    
                                }

                            <a href={`#/projects/${project.id}/backs`} className="project-show-subdiv2-back-button"><span>Back this project</span></a>
                                {/* <button href="/projects/:projectId/backs" className="project-show-subdiv2-back-button"><span>Back this project</span></button> */}
                            </form>
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

                </div>

                <div className="support-reward-div">
                    <div>
                        <h3>Support</h3>
                        <label>Make a pledeg without a reward
                            <input type="number"
                            />
                        </label>
                    </div>

                    <h4> Pledge ${reward.pledge_amount}</h4>
                    <label>INCLUDES
                    <span>{reward.title}e</span>
                    </label>

                    <label htmlFor="">ESTIMATED DELIVERY
                    <span>{reward.estimated_delivery}</span>
                    </label>

                    <label htmlFor="">REWARD QUANTITY
                    <span>{reward.reward_quantity}</span>
                    </label>
                </div>

            </div>
        );
    }
}

export default ProjectShow;