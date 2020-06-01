import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const userReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case value:
            return Object.assign({}, state, {[action.currentUser.id]: action.currentUser});
        default:
            return state;
    }
}

export default userReducer;