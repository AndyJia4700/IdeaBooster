import { combineReducers } from "redux";
import modal from "../reducers/modal_reducer";

const uiReducer = combineReducers({
    modal
});

export default uiReducer;