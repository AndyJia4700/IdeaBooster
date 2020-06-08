import React from 'react';
import { connect } from 'react-redux';
import { fetchProject, updateProject } from '../../actions/project_actions';
import ProjectForm from './project_form';

class EditPostForm extends React.Component{
    componentDidMount(){
        this.props.fetchProject(this.props.match.params.postId);
    }

    render(){
        const {action, project} = this.props;
        if (!project) return null;
        return(
            <ProjectForm
                action={action}
                project={project}
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
    action: post => dispatch(updateProject(post))
})

export default connect(mSTP, mDTP)(EditPostForm)