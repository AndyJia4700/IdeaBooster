import React from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../actions/project_actions';
import ProjectIndexItem from './project_index_item';
import {Link} from 'react-router-dom'

const mSTP = state => ({
    projects: Object.values(state.projects),
});

const mDTP = dispatch => ({
    fetchProjects: () => dispatch(fetchProjects()), 
});


class splashPage extends React.Component{

    constructor(props) {
        super(props);
        // this.state = this.props.projects[0]
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    
    render() {
        
        const { projects } = this.props;
        // const featureProject = this.props.projects[0]
        // debugger;
        return (

            <div>
                <div className="splash-category-div">
                    <ul className="splash-category-ul">
                        <li value="1" className="splash-category-li"><a className="splash-category-a" href="">Arts</a></li>
                        <li value="2" className="splash-category-li"><a className="splash-category-a" href="">Comics & Illustration</a></li>
                        <li value="3" className="splash-category-li"><a className="splash-category-a" href="">Design & Tech</a></li>
                        <li value="4" className="splash-category-li"><a className="splash-category-a" href="">Film</a></li>
                        <li value="5" className="splash-category-li"><a className="splash-category-a" href="">Food & Craft</a></li>
                        <li value="6" className="splash-category-li"><a className="splash-category-a" href="">Games</a></li>
                        <li value="7" className="splash-category-li"><a className="splash-category-a" href="">Music</a></li>
                        <li value="8" className="splash-category-li"><a className="splash-category-a" href="">Publishing</a></li>
                    </ul>
                </div>

                <div className="empty-div">
                </div>

                <div className="splash-feature-recommend">
                    <div className="splash-featured-div">
                        <h4 className="splash-projects-font">FEATURED PROJECT</h4>
                        <div>
                            {
                                projects.slice(0, 1).map(project => (
                                    <div>
                                        <Link to={`/projects/${project.id}`}>
                                            <img className="project-feature-picture1" src={project.pictureUrl}/>
                                            <br/>
                                            {project.title}
                                            {/* {this.state.entites.users[project.creator_id].username} */}
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="splash-recommend-div">
                        <h4 className="splash-projects-font">RECOMMENDED FOR YOU</h4>
                        <ul>
                            <div>
                            {
                                projects.slice(3,6).map(project => (
                                    <li key={project.id}>
                                        <Link to={`/projects/${project.id}`} >
                                            <img className="project-feature-picturelist" src={project.pictureUrl} />
                                            <br />
                                            {project.title}
                                        </Link>
                                    </li>
                                ))
                            }
                            </div>
                        </ul>
                    </div>

                    
                </div>
                
            </div>
        )
    }
}



export default connect(mSTP, mDTP)(splashPage);