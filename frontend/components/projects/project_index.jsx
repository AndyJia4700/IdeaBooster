import React from 'react';
import ProjectIndexItem from './project_index_item';
import CreateProjectFormContainer from './create_project_form_container'

class ProjectIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchProjects();
    }

    render () {
        const {projects, deleteProject} = this.props
        return (
            <div>

                <ul>
                    {
                        projects.map(project => (
                            <ProjectIndexItem
                                project={project}
                                deleteProject={deleteProject}
                                key={project.id}
                            />
                        ))
                    }
                </ul>
                {/* <CreateProjectFormContainer/> */}
            </div>
        )
    }
}

export default ProjectIndex;