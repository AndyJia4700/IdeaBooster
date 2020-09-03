import React from "react";
import { connect } from "react-redux";
import { fetchProject, fetchProjects } from "../../actions/project_actions";
import { fetchRewards, updateReward } from "../../actions/reward_actions";
import { fetchUsers } from "../../actions/user_actions";

const mSTP = (state, ownProps) => {
  const projectId = ownProps.match.params.projectId;
  const project = state.projects[projectId];
  const reward = state.rewards[projectId];
  // debugger;
  return {
    project,
    reward,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchProjects: () => dispatch(fetchProjects()),
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
    fetchRewards: () => dispatch(fetchRewards()),
    updateReward: (reward) => dispatch(updateReward(reward)),
  };
};

class EditReward extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = this.props.reward;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    const projectId = this.props.match.params.projectId;
    this.props.fetchProjects();
    this.props.fetchProject(projectId);
    this.props.fetchRewards();
    this.props.fetchUsers();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.reward.backer_id = [0, 1];
    this.props.updateReward(this.state);
  }

  update(field) {
    // debugger
    return (e) =>
      this.setState({
        [field]: e.target.value,
      });
  }

  render() {
    // debugger;
    // const { reward } = this.props
    // if (!reward) return null;
    // debugger;
    // console.log(this.props.reward);
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
                  value={this.state.title}
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
                  value={this.state.pledge_amount}
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
                  value={this.state.description}
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
                  value={this.state.estimated_delivery}
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
                  value={this.state.reward_quantity}
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

export default connect(mSTP, mDTP)(EditReward);
