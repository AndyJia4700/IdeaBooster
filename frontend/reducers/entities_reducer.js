import { combineReducers } from "redux";
import userReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    userReducer
});

export default entitiesReducer;