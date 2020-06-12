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
                                // users={users}
                                deleteProject={deleteProject}
                                // key={project.id}
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