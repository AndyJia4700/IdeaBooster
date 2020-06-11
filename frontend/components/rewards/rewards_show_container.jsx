import { connect } from "react-redux";
import { fetchReward, deleteReward } from '../../actions/reward_actions';
import rewardsShow from "./rewards_show";


const mSTP = (state, ownProps) => {
    // debugger;
    const projectId = ownProps.match.params.projectId;
    const project = state.projects[projectId];

    if (state.rewards === null){
        // debugger;
        return {
            reward: {
                title: '',
                description: '',
                project_id: '',
                pledge_amount: '',
                reward_quantity: '',
                shipping_option: '',
                time_limit: '',
                estimated_delivery: ''
            },

            project,
        };
    } else{
        // debugger;
        return {
            project: Object.values(state.rewards)
        }
    }
};

const mDTP = dispatch => {
    // debugger;
    return {
    // action: postId => dispatch(fetchProject(postId)),
        fetchReward: (projectId) => dispatch(fetchReward(projectId)),
        deleteReward: projectId => dispatch(deleteReward(projectId))
    }
};

export default connect(mSTP, mDTP)(rewardsShow);