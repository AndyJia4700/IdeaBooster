import { connect } from "react-redux";
import { fetchProject, fetchProjects } from "../../actions/project_actions";
import { fetchRewards, fetchReward } from "../../actions/reward_actions";
import { fetchUsers } from '../../actions/user_actions';
import ProjectShow from "./project_show";


const mSTP = (state, ownProps) => {
    const projectId = ownProps.match.params.projectId;
    const project = state.projects[projectId];
    const reward = state.rewards[projectId];
    
    // debugger;
    if (!reward){
    return {
        currentUser: state.session.currentUser,
        project,
        reward:
        {
            pledge_amount: 0,
            title: "",
            estimated_delivery: "",
            reward_quantity: "",
            } 
        }
    } else {
        return {
            project,
            reward,
            currentUser: state.session.currentUser,
        }
    }

};

const mDTP = dispatch => {
    return {
        fetchUsers: ()=> dispatch(fetchUsers()),
        fetchProjects: () => dispatch(fetchProjects()),
        fetchProject: projectId => dispatch(fetchProject(projectId)),
        fetchRewards: () => dispatch(fetchRewards()),
        fetchReward: (rewardId) => dispatch(fetchReward(rewardId)),
    }
};

export default connect(mSTP, mDTP)(ProjectShow)
