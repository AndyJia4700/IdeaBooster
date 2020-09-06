import React from 'react';
// import {Link} from 'react-router-dom';
// import { fetchProjects } from '../../actions/project_actions';
// import RewardsShowContainer from '../rewards/rewards_show_container'

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
      this.props.fetchUsers();
      // this.props.fetchReward(projectId);
    }

    render(){
      
      const { project, reward} = this.props
      if (!project) return null;        
      const today = new Date();
      const end = new Date(project.end_date);
      let daysLeft = Math.floor((end - today)/86400000) + 1
      // if (daysLeft < 1) daysLeft = 'End';

      if (!reward.total_backer) reward.total_backer = 0
      if (!reward.total_fund) reward.total_fund = 0
        // let i = parseFloat(Math.floor((reward.total_fund / project.funding_goal)*100) + '%');

      const checkCurrentUser = (
        (this.props.currentUser === null) ? <a href="#/login" className="project-show-subdiv2-back-button">Back this project</a> : <a href={`#/projects/${this.props.project.id}/backs`} className="project-show-subdiv2-back-button">Back this project</a>
      );

      return (
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
                <p className="project-show-subdiv2-back-money">
                  ${reward.total_fund}
                </p>
                <p className="project-show-p">
                  pledged of ${project.funding_goal} goal
                </p>
              </div>

              <div className="project-show-subdiv2-back-backer">
                <p className="project-show-subdiv2-back-num">{reward.total_backer}</p>
                <p className="project-show-p"> backers</p>
                <p className="project-show-subdiv2-back-num">{daysLeft}</p>
                <p className="project-show-p"> days to go</p>
              </div>

              <div>
                {checkCurrentUser}
              </div>

            </div>
          </div>

          <div className="project-show-ul-div">
            <ul className="project-show-ul">
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
              <label>
                Make a pledeg without a reward
                <input type="number" />
              </label>
            </div>

            <h4> Pledge ${reward.pledge_amount}</h4>
            <label>
              INCLUDES
              <span>{reward.title}e</span>
            </label>

            <label htmlFor="">
              ESTIMATED DELIVERY
              <span>{reward.estimated_delivery}</span>
            </label>

            <label htmlFor="">
              REWARD QUANTITY
              <span>{reward.reward_quantity}</span>
            </label>
          </div>
        </div>
      );
    }
}

export default ProjectShow;