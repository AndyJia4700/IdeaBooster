import { connect } from "react-redux";
import { fetchProjects, deleteProject } from '../../actions/project_actions';
import ProjectIndex from "./project_index";


const mSTP = state => ({
    projects: Object.values(state.projects)
});

const mDTP = dispatch => ({
    // action: postId => dispatch(fetchProject(postId)),
    fetchProjects: () => dispatch(fetchProjects()),
    deleteProject: projectId => dispatch(deleteProject(projectId))
});

export default connect(mSTP, mDTP)(ProjectIndex);