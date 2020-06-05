import { connect } from "react-redux";
import { fetchProjects, deleProject } from '../../actions/project_actions';
import ProjectIndex from "./project_index";


const mSTP = state => ({
    projects: Object.values(state.projects)
});

const mDTP = dispatch => ({
    fetchProjects: () => dispatch(fetchProjects()),
    deleProject: projectId => dispatch(deleProject(projectId))
});

export default connect(mSTP, mDTP)(ProjectIndex);