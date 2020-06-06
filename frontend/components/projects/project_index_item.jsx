import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = props => (
    <li>
        <Link to={`/projects/${props.project.id}`}>{props.project.title}</Link>
        <img src={props.project.pictureUrl}/>
        <Link to={`/projects/${props.project.id}/edit`}>Edit</Link>
        <button onClick={() => props.deleteProject(props.project.id)}>Delete</button>
    </li>
)

export default ProjectIndexItem;