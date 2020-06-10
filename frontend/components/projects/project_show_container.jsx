import { connect } from "react-redux";
import { fetchProject } from "../../actions/project_actions";
import ProjectShow from "./project_show";


const mSTP = (state, ownProps) => {
    const projectId = ownProps.match.params.projectId;
    const project = state.projects[projectId];
    return {
        project
    }
};

const mDTP = dispatch => {
    // debugger;
    return {
    fetchProject: projectId => dispatch(fetchProject(projectId)),
    // action: projectId => dispatch(fetchProject(projectId)),
    }
};

export default connect(mSTP, mDTP)(ProjectShow)
