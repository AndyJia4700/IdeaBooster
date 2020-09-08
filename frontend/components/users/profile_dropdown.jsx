import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchProjects, deleteProject } from '../../util/project_util';
import { Link } from 'react-router-dom';


const mSTP = (state) => {
    return {
        currentUser: state.session.currentUser,
        projects: Object.values(state.projects)
    }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects()),
    deleteProject: projectId => dispatch(deleteProject(projectId))
});


class profileDropDown extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.props.logout().then(this.props.closeModal());
    }

    refreshPage(){
        this.props.closeModal();
        setTimeout(() => {
            window.location.reload();
            return false;
        }, 10);
    }

    render(){
        const { projects, currentUser } = this.props
        
        return (
            <div className="modal-child-div">
                <div className="profile-drop-div1">
                    <div className="profile-drop-subdiv1">
                        <p className="profile-drop-title">YOUR ACCOUNT</p>
                        <div className="profile-drop-subdiv1-sub1">
                            <ul className="profile-drop-subdiv1-ull">
                                <li className="profile-drop-li">Saved projects</li>
                                <li className="profile-drop-li">Recommended for you</li>
                                <li className="profile-drop-li">Following</li>
                            </ul>
                        </div>

                        <div className="profile-drop-subdiv1-sub2">
                            <ul className="profile-drop-subdiv1-ul">
                                <li className="profile-drop-li">Profile</li>
                                <li className="profile-drop-li">Settings</li>
                                <li className="profile-drop-li">Messages</li>
                                <li className="profile-drop-li">Activity</li>
                            </ul>
                        </div>
                    </div>

                    <div className="profile-drop-subdiv2">
                        <p className="profile-drop-title">CREATED PROJECTS</p>
                        <ul className="profile-drop-subdiv1-ul"> 
                                {
                                    
                                    projects.map(project => {
                                        if (project && project.creator_id === currentUser.id) {
                                            return(
                                                <li className="profile-project-list" key={project.id}>
                                                    <div className="profile-own-project-div">
                                                        <Link to={`/projects/${project.id}/edit`} onClick={this.refreshPage} >
                                                            <img className="profile-pictures" src={project.pictureUrl} />
                                                            <p className="profile-pic-lable">{project.title}</p>
                                                        </Link>
                                                    </div>
                                                </li>
                                            )
                                        }             
                                    })
                                }
                        </ul>

                        <a href="#/projects/new" onClick={this.props.closeModal}>New</a>
                    </div>

                </div>

                <div className="profile-drop-div2">
                    <button className="profile-drop-logout" onClick={this.handleClick}>Logout</button>
                </div>

                

            </div>
        )
    }
}


export default connect(mSTP, mDTP)(profileDropDown)