import React from 'react';
import { connect } from "react-redux";
import { fetchProjects, fetchProject } from '../../actions/project_actions';
import { fetchRewards, fetchReward, updateReward } from "../../actions/reward_actions";

const mSTP = (state, ownProps) => {
    // debugger;
    return {
        currentUser: state.session.currentUser,
        // project: state.projects[ownProps.match.params.projectId], 
        reward: state.rewards[ownProps.match.params.projectId],
    }
};

const mDTP = dispatch => {
    // debugger;
    return {
      // fetchProjects: () => dispatch(fetchProjects()),
      // fetchProject: (projectId) => dispatch(fetchProject(projectId)),

      fetchRewards: () => dispatch(fetchRewards()),
      fetchReward: (rewardId) => dispatch(fetchReward(rewardId)),
      updateReward: (reward) => dispatch(updateReward(reward)),
    };

};

class Backs extends React.Component {
  constructor(props){
      super(props)
      // debugger;
      this.state = this.props.reward
      // this.getBackerId = this.getBackerId.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      // this.updateBackers = this.updateBackers.bind(this);
      // this.updateAmount = this.updateAmount.bind(this);
      this.update = this.update.bind(this);
      this.forwardback = this.forwardback.bind(this)
  };

  componentDidMount() {
    this.props.fetchRewards();
  }
    

  handleSubmit(e){
    e.preventDefault();
    const amount = this.props.reward.pledge_amount;
    this.setState({
      total_fund: (this.state.total_fund + amount),
      total_backer: (this.state.total_backer + 1)
    });
    this.props.updateReward(this.state);
  }

  forwardback(){
    window.location.href = `#/projects/${this.props.match.params.projectId}`;
    window.location.reload();
    return false;
  }

  update(field) {
    return e => this.setState({ 
      [field]: e.currentTarget.value,
    })
  }


  render(){
    const { reward } = this.props;

    if(!this.props.reward) return (
      <div>
        Fake Project, Do not waste your money!!
      </div>
    );

    return (
      <form onSubmit={this.handleSubmit} className="back-form">
        <div>
          <h3>Support this project</h3>
          <p>Select an option below</p>
        </div>

        <div className="rewards-option-div">
          <div className="rewards-option-subdiv1">
            ${reward.pledge_amount} or more
            <br />
            <h4>{reward.title}</h4>
            <br />
            <p>{reward.description}</p>
            <br />
          </div>

          <div className="rewards-option-subdiv1">
            <p>ESTIMATED DELIVERY</p>
            {reward.estimated_delivery}
            <p>SHIPS TO Anywhere in the world</p>
          </div>
        </div>

        <button type="submit">next</button>
        <button type="submit" onClick={this.forwardback}>
          Continue
        </button>
      </form>
    );
  }
    
}

export default connect(mSTP, mDTP)(Backs);