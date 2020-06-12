import React from 'react';
import { Link } from 'react-router-dom';
// import { createStore } from 'redux';

const ProjectIndexItem = props => {
    // debugger;
    
    return(
    
    <li className="project-id-li">
        <div className="project-id-outdiv">
            <div className="project-id-div">      
                <Link to={`/projects/${props.project.id}`} className="project-id-a">
                    <img className="project-id-picture" src={props.project.pictureUrl} />
                    <br/>
                    {props.project.title}
                    <br/>
                    {props.project.subtitle}
                    <br/>
                    {/* By {props.users[props.project.creator_id - 9].username} */}
                </Link>

                
                {/* <h4>{creator.username}</h4> */}
            </div>
        </div>
    </li>
    )
}

export default ProjectIndexItem;