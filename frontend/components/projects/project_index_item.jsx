import React from 'react';
import { Link } from 'react-router-dom';
// import { createStore } from 'redux';

const ProjectIndexItem = props => (
    <li>
        <img className="project-id-picture" src={props.project.pictureUrl}/>
        <Link to={`/projects/${props.project.id}`}>{props.project.title}</Link>
        {/* <h4>{creator.username}</h4> */}
        {/* <button onClick={() => props.deleteProject(props.project.id)}>Delete</button> */}
        {/* <Link to={`/projects/${props.project.id}/edit`}>Edit</Link> */}
    </li>
)

export default ProjectIndexItem;