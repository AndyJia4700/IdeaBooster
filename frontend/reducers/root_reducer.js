import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import ProjectReducer from "./projects_reducer";
import uiReducer from "./ui_reducer";
import rewardsReducer from "./rewards_reducer";
import userReducer from "./users_reducer";


const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    projects: ProjectReducer,
    rewards: rewardsReducer,
    users: userReducer,
    ui: uiReducer
});

export default rootReducer;