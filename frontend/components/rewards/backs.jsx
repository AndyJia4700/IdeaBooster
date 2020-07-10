import React from 'react';
import { connect } from "react-redux";
import { fetchProjects, fetchProject } from '../../actions/project_actions';
import { fetchRewards, fetchReward, updateReward } from "../../actions/reward_actions";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        project: state.projects[ownProps.match.params.projectId], 
        reward: state.rewards[ownProps.match.params.projectId],
    }
};

const mDTP = dispatch => {
    // debugger;
    return {
        fetchProjects: () => dispatch(fetchProjects()),
        fetchProject: projectId => dispatch(fetchProject(projectId)),

        fetchRewards: () => dispatch(fetchRewards()),
        fetchReward: (rewardId) => dispatch(fetchReward(rewardId)),

        action: (reward) => dispatch(updateReward(reward))
    }
};

class Backs extends React.Component {
    constructor(props){
        super(props)
        // debugger;
        this.getBackerId = this.getBackerId.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.updateBackers = this.updateBackers.bind(this);
        // this.updateAmount = this.updateAmount.bind(this);
        // this.update = this.update.bind(this);
    };

    componentDidMount() {
        // debugger
        const id = this.props.match.params.projectId
        this.props.fetchProjects();
        this.props.fetchProject(id);

        this.props.fetchRewards();
        this.props.fetchReward(id);
        // this.props.updateProject(formData, id)
    }
    
    getBackerId(){
        // const backer = this.props.currentUser.id;
        // const pledge_amount = 0;
        // const backer_id = this.props.reward.backer_id.push([backer, pledge_amount])
        // console.log(backer_id);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state)
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
        let backer = this.props.currentUser.id;
        // let pledge_amount = 10;
        return e => this.setState({ 
            [field]: this.state.backer_id.push([backer, e.currentTarget.value]),
        })
    }


    render(){

        // console.log(this.props.reward);
        // let backer = this.props.currentUser.id;
        // let pledge_amount = 10;
        // let backer_id = this.props.reward.backer_id.push([backer, pledge_amount])
        // console.log(this.props.reward.backer_id);
        // console.log(backer_id);

        return (

            <form onSubmit={this.handleSubmit}>
                <div>
                    <h3>Support this project</h3>
                    <p>Select an option below</p>
                </div>
                
                <div>
                    <h3>Pledege without a reward</h3>
                    <div>
                        <p>Back it because you believe in it.</p>
                        <p>Support the project for no reward, just because it speaks to you.</p>
                    </div>

                    <div>
                        <input type="number"
                            value={this.props.backer_id}
                            onChange={this.update('backer_id')}
                        />
                    </div>

                    <div>
                        {/* {this.props} */}
                    </div>
                </div>
                <button type="submit">Continue</button>
            </form>
        )
    }
    
}

export default connect(mSTP, mDTP)(Backs);