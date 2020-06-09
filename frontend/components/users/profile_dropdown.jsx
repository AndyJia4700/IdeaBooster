import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const mSTP = (state) => ({
    currentUser: state.session.currentUser,
    projects: Object.values(state.projects)
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects())
});


class profileDropDown extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.props.logout().then(this.props.closeModal);
    }
    render(){
        // debugger;
        return (
            <div className="modal-child-div">
                <div className="profile-drop-div1">
                    <div className="profile-drop-subdiv1">
                        <p className="profile-drop-title">YOUR ACCOUNT</p>
                        <div className="profile-drop-subdiv1-sub1">
                            <ul>
                                <li>Saved projects</li>
                                <li>Recommended for you</li>
                                <li>Following</li>
                                <li>Profile</li>
                            </ul>
                        </div>

                        <div className="profile-drop-subdiv1-sub2">
                            <ul>
                                <li>Settings</li>
                                <li>Messages</li>
                                <li>Activity</li>
                            </ul>
                        </div>
                    </div>

                    <div className="profile-drop-subdiv2">
                        <p className="profile-drop-title">CREATED PROJECTS</p>
                        <ul>
                            your created project
                        </ul>

                    </div>
                </div>

                <div className="profile-drop-div2">
                    <div className="">
                        <button onClick={this.handleClick}>Logout</button>
                    </div>
                </div>

            </div>
        )
    }
}


export default connect(mSTP, mDTP)(profileDropDown)