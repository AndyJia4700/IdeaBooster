import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import ProjectReducer from "./projects_reducer";
import uiReducer from "./ui_reducer";


const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    projects: ProjectReducer,
    ui: uiReducer
});

export default rootReducer;