import { connect } from "react-redux";
import { fetchProjects, deleteProject } from '../../actions/project_actions';
import ProjectIndex from "./project_index";
import { fetchUsers } from "../../actions/user_actions";


const mSTP = state => {
    // debugger;
    return {
        users: Object.values(state.users),
        projects: Object.values(state.projects),
    }
};

const mDTP = dispatch => {
    // debugger;
    return{
        fetchProjects: () => dispatch(fetchProjects()),
        fetchUsers: () => dispatch(fetchUsers()),
        deleteProject: projectId => dispatch(deleteProject(projectId)),
    }
};

export default connect(mSTP, mDTP)(ProjectIndex);