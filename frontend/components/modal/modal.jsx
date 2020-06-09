import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ProfileDropDown from '../users/profile_dropdown';
import SessionShow from '../session_bar/session_show';
// SessionShow
const mSTP = state => {
    // debugger;
    return {
        modal: state.ui.modal
    };
};

const mDTP = dispatch => {
    // debugger;
    return {
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout())
    }
}

function Modal({modal, closeModal}){
    if(!modal){
        return null;
    }

    let component;
    // debugger;
    switch (modal) {
        case 'profileDropDown':
            // debugger;
            component = <ProfileDropDown closeModal={closeModal}/>;
            break;
        default:
            debugger;
            return null;
    }

    // debugger;

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}


export default connect(mSTP, mDTP)(Modal)

