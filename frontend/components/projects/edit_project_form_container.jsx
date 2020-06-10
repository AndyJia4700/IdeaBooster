import React from 'react';
import { connect } from 'react-redux';
import { fetchProject, updateProject } from '../../actions/project_actions';
import ProjectForm from './project_form';

class EditPostForm extends React.Component{
    componentDidMount(){
        this.props.fetchProject(this.props.match.params.projectId);
    }

    render(){
        const {action, project} = this.props;
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

const mSTP = (state, ownProps) => ({
    project: state.project[ownProps.match.params.projectId],
    formType: 'Update Post'
});

const mDTP = dispatch => ({
    fetchProject: projectId => dispatch(fetchProject(projectId)),
    action: project => dispatch(updateProject(project))
})

export default connect(mSTP, mDTP)(EditPostForm)