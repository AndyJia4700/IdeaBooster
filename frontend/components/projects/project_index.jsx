import React from 'react';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchProjects()
            .then(this.props.fetchUsers()); 
    }

    render () {
        
        const {projects, users, deleteProject} = this.props
        // debugger;
        
        return (
            <div className="project-index-div">
                <ul className="project-index-ul">
                    {
                        projects.map(project => (
                            <ProjectIndexItem
                                project={project}
                                key={project.id}
                                deleteProject={deleteProject}
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