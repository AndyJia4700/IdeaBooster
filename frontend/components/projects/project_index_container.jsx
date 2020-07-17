import { connect } from "react-redux";
import { fetchProjects, deleteProject } from '../../actions/project_actions';
import ProjectIndex from "./project_index";
import { fetchUsers } from "../../actions/user_actions";


const mSTP = state => {
    // debugger;
    return {
        projects: Object.values(state.projects),
    }
};

const mDTP = dispatch => {
    // debugger;
    return{
        fetchProjects: () => dispatch(fetchProjects()),
        deleteProject: projectId => dispatch(deleteProject(projectId)),
    }
};

export default connect(mSTP, mDTP)(ProjectIndex);