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
    };

    componentDidMount() {

        // debugger
        // const id = this.props.match.params.projectId
        // this.props.fetchProjects();
        // this.props.fetchProject(id);

        this.props.fetchRewards();
        // this.props.fetchReward(7);
        // this.props.updateReward()
    }
    

    handleSubmit(e){
      e.preventDefault();
      // const backerId = this.props.currentUser.id;
      const amount = this.props.reward.pledge_amount;
      this.setState({
        total_fund: (this.state.total_fund + amount),
        total_backer: (this.state.total_backer + 1)
      });

      // this.state.total_fund
      
      this.props.updateReward(this.state);
    }

    // updateBackers(){
    //     this.reward.backer_id.length
    // }

    // updateAmount(){
    //     const amount = this.reward.backer_id
    //     const sum = 0;
    //     for (let i = 0; i < amount.length; i++) {
    //         sum += amount[1]  
    //     }
    // }

    update(field) {
      // let backer = this.props.currentUser.id;
      // let pledge_amount = 10;
      // debugger;
      return e => this.setState({ 
        // [field]: this.state.backer_id.push([backer, e.currentTarget.value]),
        [field]: e.currentTarget.value,
      })
    }


    render(){
      
        // console.log(this.props.reward);
        // let backer = this.props.currentUser.id;
        // let pledge_amount = 10;
        // let backer_id = this.props.reward.backer_id.push([backer, pledge_amount])
        // console.log(this.props.reward.backer_id);
        // console.log(backer_id);
        // debugger;

        return (
          <form onSubmit={this.handleSubmit}>
            <div>
              <h3>Support this project</h3>
              <p>Select an option below</p>
            </div>

            <div>
              <h3>Pledge without a reward</h3>
              <div>
                <p>Back it because you believe in it.</p>
                <p>
                  Support the project for no reward, just because it speaks to
                  you.
                </p>
              </div>

              <div>
                <input
                  type="number"
                  // value={this.state.total_fund}
                  // onChange={this.update("total_fund")}
                />
              </div>

              <div>{/* {this.props} */}</div>
            </div>
            <div>
              {this.props.reward.pledge_amount}
              <br />
              {this.props.reward.title}
              <br />
              {this.props.reward.description}
              <br />
              {this.props.reward.reward_quantity}
              <br />
              {this.props.reward.estimated_delivery}
            </div>

            <button type="submit">Continue</button>
          </form>
        );
    }
    
}

export default connect(mSTP, mDTP)(Backs);