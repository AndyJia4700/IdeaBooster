import React from 'react';
import { connect } from 'react-redux';
import { fetchProjects, fetchProject, updateProject } from '../../actions/project_actions';
import { fetchRewards, fetchReward } from "../../actions/reward_actions";
import ProjectForm from './project_form';


class EditPostForm extends React.Component{
    constructor(props){
        super(props)
    }

    
    componentDidMount(){
        const id = this.props.match.params.projectId
        this.props.fetchProjects();
        this.props.fetchProject(id);
        this.props.fetchRewards();
    }

    render(){
        const {action, project, formType} = this.props;
        if (!project) return null;
        return(
            <ProjectForm
                action={action}
                project={project}
                formType={formType}
            />
        );
    }
}


const mSTP = (state, ownProps) => {
    // debugger;
    return {
        project: state.projects[ownProps.match.params.projectId],
        formType: 'Update Post'
    }
};

const mDTP = dispatch => {
    
    // debugger;
    return {
        fetchProjects: () => dispatch(fetchProjects()),
        fetchProject: projectId => dispatch(fetchProject(projectId)),
        fetchRewards: () => dispatch(fetchRewards()),
        action: (formData, projectId) => dispatch(updateProject(formData, projectId))
    }
};

export default connect(mSTP, mDTP)(EditPostForm)