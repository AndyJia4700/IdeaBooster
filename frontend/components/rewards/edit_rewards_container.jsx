import React from "react";
import { connect } from "react-redux";
import {
  fetchRewards,
  fetchReward,
  updateReward,
} from "../../actions/reward_actions";


class EditReward extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = this.props.reward;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    // debugger
    // const id = this.props.match.params.projectId;
    this.props.fetchRewards();
    // this.props.fetchReward(9);
    // this.props.updateProject(formData, id)
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.props.reward);
    this.props.reward.backer_id = [0,1]
    
    console.log(this.props.reward);
    debugger
    this.props.updateReward(this.props.reward);
  }

  update(field) {
    debugger
    return e => this.setState({ 
      [field]: e.target.value 
    });
  }

  render() {    
    // debugger;
    const { reward } = this.props
    if (!reward) return null;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="reward-div">
          <div className="project-basic-top-div">
            <div className="project-basic-top-subdiv">
              <h3 className="project-basic-top-h4">Add your rewards</h3>
              <p className="project-basic-top-p">
                Offer simple, meaningful rewards that bring backers closer to
                your project.
              </p>
            </div>
          </div>

          <div className="project-basic-subdiv2">
            <div className="reward-divs">
              <label className="project-basic">
                <span className="project-basic-span">Title</span>
                <p className="reward-intro-p">Briefly describe this reward.</p>
                <input
                  type="text"
                  value={this.props.reward.title}
                  onChange={this.update("title")}
                  placeholder="Signed limited-edition"
                  className="project-basic-input"
                />
              </label>
            </div>

            <div className="reward-divs">
              <label className="reward-label">
                <span className="reward-span">Pledge amount</span>
                <p className="reward-intro-p">
                  Set a minimum pledge amount for this reward.
                </p>
                <input
                  type="number"
                  value={reward.pledge_amount}
                  onChange={this.update("pledge_amount")}
                  placeholder="1"
                  className="reward-input"
                />
              </label>
            </div>

            <div className="reward-divs">
              <label className="reward-label">
                <span className="reward-span">Description</span>
                <p className="reward-intro-p">
                  Describe this reward in more detail.
                </p>

                <textarea
                  value={reward.description}
                  onChange={this.update("description")}
                  placeholder="Get an early copy - hot off the presses!"
                  className="reward-input-text"
                />
              </label>
            </div>

            <div className="reward-divs">
              <label className="reward-label">
                <span className="reward-span">Estimated delivery</span>
                <p className="reward-intro-p">
                  Give yourself plenty of time. It's better to deliver to
                  backers ahead of schedule than behind.
                </p>

                <input
                  type="date"
                  value={reward.estimated_delivery}
                  onChange={this.update("estimated_delivery")}
                  className="reward-input"
                />
              </label>
            </div>

            <div className="reward-divs">
              <label className="reward-label">
                <span className="reward-span">Reward quantity</span>
                <p className="reward-intro-p">
                  You may want to limit the quantity of this reward available to
                  backers.
                </p>

                <input
                  type="number"
                  value={reward.reward_quantity}
                  onChange={this.update("reward_quantity")}
                  className="reward-input"
                />
              </label>
            </div>
          </div>
        </div>

        <button type="submit">Save</button>
      </form>
    );
  }
}

const mSTP = (state, ownProps) => {
  return {
    reward: state.rewards[ownProps.match.params.projectId],
  };
};

const mDTP = (dispatch) => {
  return {
    fetchRewards: () => dispatch(fetchRewards()),
    fetchReward: (projectId) => dispatch(fetchReward(projectId)),
    updateReward: (reward) => dispatch(updateReward(reward)),
  };

};

export default connect(mSTP, mDTP)(EditReward);
