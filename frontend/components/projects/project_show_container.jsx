import { connect } from "react-redux";
import { fetchProject } from "../../actions/project_actions";
import ProjectShow from "./project_show";

const mSTP = (state, ownProps) => ({
    project: state.projects[ownProps.match.params.projectId]
});

const mDTP = dispatch => ({
    fetchProject: projectId => dispatch(fetchProject(projectId))
});

export default connect(mSTP, mDTP)(ProjectShow)
