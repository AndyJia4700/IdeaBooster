import { connect } from "react-redux";
import { createProject } from "../../actions/project_actions";
import ProjectForm from "./project_form";

const mSTP = state => ({
    project: {
        title: '',
        subtitle: '',
        creator_id: '',
        category_id: '',
        location_id: '',
        funding_goal: '',
        launch_date: '',
        end_date: '',
        picture: null
    },
    formType: 'Start a project'
});

const mDTP = dispatch => ({
    action: project => dispatch(createProject(project))
});

export default connect(mSTP, mDTP)(ProjectForm)