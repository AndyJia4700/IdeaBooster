import React from 'react';
import {Link} from 'react-router-dom';
// import { fetchProject } from '../../actions/project_actions';

class ProjectShow extends React.Component{
    constructor(props){
        super(props);
        // debugger
    }

    componentDidMount(){
        // debugger;
        const projectId = this.props.match.params.projectId
        this.props.fetchProject(projectId);
    }
    render(){
        const {project} = this.props
        // debugger;
        return(
            <div>
                {/* <p>start this is details</p> */}
                {/* <h1>{project.title}</h1>
                <p>{project.subtitle}</p> */}
                {/* <img className="project-id-picture" src={project.pictureUrl} /> */}
                {/* <p>end</p> */}
            </div>
        );
    }
}

export default ProjectShow;