import { connect } from "react-redux";
import { fetchProject, fetchProjects } from "../../actions/project_actions";
import { fetchReward } from "../../actions/reward_actions";
import ProjectShow from "./project_show";


const mSTP = (state, ownProps) => {
    const projectId = ownProps.match.params.projectId;
    const project = state.projects[projectId];
    // debugger;
    if (state.rewards === null) {
        // debugger;
        return {
            project,
            reward: {
                title: '',
                description: '',
                project_id: '',
                pledge_amount: '',
                reward_quantity: '',
                shipping_option: '',
                time_limit: '',
                estimated_delivery: ''
            }
        }
    } else {
        // debugger;
        return {
            project,
            reward: Object.values(state.rewards)
        }
    }
};

const mDTP = dispatch => {
    // debugger;
    return {
        fetchProjects: () => dispatch(fetchProjects()),
        fetchProject: projectId => dispatch(fetchProject(projectId)),
        fetchReward: (projectId) => dispatch(fetchReward(projectId)),
    }
};

export default connect(mSTP, mDTP)(ProjectShow)
