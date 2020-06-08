import { connect } from "react-redux";
import { fetchProject } from "../../actions/project_actions";
import ProjectShow from "./project_show";

// const index = (state, ownProps) => {
//     const projectId = ownProps.match.params.projectId;
//     const projects = Object.values(state.projects)
//     for (let i = 0; i < projects.length; i++) {
//         if (projects[i].id === projectId)
//         // debugger;
//             return i
//     }
// }

const mSTP = (state, ownProps) => {
    // debugger;
    // const project = state.projects[index(state, ownProps)]
    const projectId = ownProps.match.params.projectId
    const project = state.projects[projectId - 19]
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
