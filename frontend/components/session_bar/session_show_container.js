import { connect } from "react-redux";
// import { logout } from "../../actions/session_actions";
import SessionShow from "./session_show";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state)=> ({
    currentUser: state.session.currentUser
});

const mDTP = dispatch => ({
    // logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP,mDTP)(SessionShow)