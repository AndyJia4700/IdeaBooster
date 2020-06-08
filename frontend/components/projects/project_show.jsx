import React from 'react';
import {Link} from 'react-router-dom';
// import { fetchProject } from '../../actions/project_actions';

class ProjectShow extends React.Component{
    constructor(props){
        super(props);
        debugger
    }

    componentDidMount(){
        debugger;
        const projectId = this.props.match.params.projectId
        this.props.fetchProject(projectId);
    }


    render(){
        const {project} = this.props
        debugger;
        return(
            <div>
                <div>
                    <h1>{project.title}</h1>
                    <p>{project.subtitle}</p>
                </div>

                <div>
                    <img className="project-detail-picture" src={project.pictureUrl} />
                    <p>{project.location_id}</p>
                </div>

                <div>

                    <a href="">
                        <button>Back this project</button>
                    </a>
                </div>
            </div>
        );
    }
}

export default ProjectShow;