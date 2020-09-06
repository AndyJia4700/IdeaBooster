import React from 'react';
import { connect } from "react-redux";
import { fetchProjects, fetchProject } from '../../actions/project_actions';
import { fetchRewards, fetchReward, updateReward } from "../../actions/reward_actions";

const mSTP = (state, ownProps) => {
    // debugger;
  return {
    reward: state.rewards[ownProps.match.params.projectId],
  }
};

const mDTP = dispatch => {
    return {
      fetchRewards: () => dispatch(fetchRewards()),
      fetchReward: (rewardId) => dispatch(fetchReward(rewardId)),
      updateReward: (reward) => dispatch(updateReward(reward)),
    };

};

class Backs extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.reward;
    this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.update = this.update.bind(this);
    this.forwardback = this.forwardback.bind(this);
    // this.pledge = this.pledge.bind(this);
  };

  componentDidMount() {
    this.props.fetchRewards();
  }


  handleSubmit1(e) {
    e.preventDefault();
    const amount = document.getElementById("pledge_more").value;
    this.setState({
      total_fund: parseInt(this.state.total_fund) + parseInt(amount),
      total_backer: parseInt(this.state.total_backer + 1)
    });
    this.props.updateReward(this.state);
  }
  

  handleSubmit2(e){
    e.preventDefault();
    const origin = this.props.reward.pledge_amount;
    const more = document.getElementById("pledge_more").value;
    
    const amount = (
      (more > origin) ? more : origin
    );

    this.setState({
      // total_fund: parseInt(this.state.total_fund) - parseInt(amount),
      total_fund: 0,
      // total_backer: parseInt(this.state.total_backer + 1)
      total_backer: 0,
    });

    this.props.updateReward(this.state);
  }
  
  forwardback(){
    // e.preventDefault();
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
          <input type="radio" className="back-radio" onClick={this.handleSubmit1} />
          <div>
            <p>
              Pledge without a reward
            </p>
            <br/>
            <p>
              Back it because you believe in it.
              Support the project for no reward, just because it speaks to you.
            </p>
            <input type="number" id=""/>
          </div>
        </div>

        <div className="rewards-option-div">
          <input type="radio" className="back-radio" onClick={this.handleSubmit2}/>
          
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
            <input type="number"
            placeholder={reward.pledge_amount}
            id="pledge_more"
            />
          </div>

        </div>

        <div className="back-btns">
          {/* <button type="submit" className="back-btn" onClick={() => alert("Pledged Successfully!")}>Pledge</button> */}
          
          <button onClick={this.forwardback} className="back-btn">
            Continue
          </button>
        </div>
      </form>
    );
  }
    
}

export default connect(mSTP, mDTP)(Backs);