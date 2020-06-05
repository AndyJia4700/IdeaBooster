import React from 'react';
import {Link} from 'react-router-dom';

class ProjectShow extends React.Component{
    componentDidMount(){
        this.props.fetchProject(this.props.match.params.projectId);
    }
    render(){
        const {project} = this.props;
        return(
            <div>
                {project.title}
                {project.subtitle}
                <Link to='/' />
            </div>
        );
    }
}

export default ProjectShow;