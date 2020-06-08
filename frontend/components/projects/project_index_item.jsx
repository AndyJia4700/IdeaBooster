import React from 'react';
import { Link } from 'react-router-dom';
// import { createStore } from 'redux';

const ProjectIndexItem = props => (
    <li className="project-id-li">
        <div className="project-id-outdiv">
            <div className="project-id-div">      
                <Link to={`/projects/${props.project.id}`} className="project-id-a">
                    <img className="project-id-picture" src={props.project.pictureUrl} />
                    <br/>
                    {props.project.title}
                    <br/>

                    {/* {props.project.subtitle} */}
                </Link>
                
                {/* <h4>{creator.username}</h4> */}
                {/* <button onClick={() => props.deleteProject(props.project.id)}>Delete</button> */}
                {/* <Link to={`/projects/${props.project.id}/edit`}>Edit</Link> */}
            </div>
        </div>
    </li>
)

export default ProjectIndexItem;