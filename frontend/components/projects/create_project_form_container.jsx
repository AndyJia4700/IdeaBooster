import { connect } from "react-redux";
import { createProject } from "../../actions/project_actions";
import ProjectForm from "./project_form";

const mSTP = state => ({
    project: {
        title: '',
        subtitle: '',
        category_id: '',
        location_id: '',
        funding_goal: '',
        launch_date: null,
        end_date: null,
        pictureUrl: null,
        pictureFile: null
    },
    formType: 'Start a project'
});

const mDTP = dispatch => ({
    action: project => dispatch(createProject(project))
});

export default connect(mSTP, mDTP)(ProjectForm)