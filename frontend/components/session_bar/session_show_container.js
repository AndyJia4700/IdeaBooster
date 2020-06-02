import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import SessionShow from "./session_show";


// const mSTP = ({session, entities:{users}})=> ({
//     currentUser: users[session.id]
// });

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mDTP)(SessionShow)