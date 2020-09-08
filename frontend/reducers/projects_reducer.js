import { RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT } from "../actions/project_actions";


const ProjectReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ALL_PROJECTS:
            // debugger;
            return Object.assign({}, oldState, action.projects);
        case RECEIVE_PROJECT:
            // debugger;
            return Object.assign({}, oldState, {[action.projectId]: action.project});
        case REMOVE_PROJECT:
            let nextState = Object.assign({}, oldState)
            delete nextState[action.projectId]
            return nextState;
        default: 
            return oldState;
    }
}

export default ProjectReducer;