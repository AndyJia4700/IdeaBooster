import { RECEIVE_REWARD, REMOVE_REWARD, RECEIVE_ALL_REWARDS } from "../actions/reward_actions";


const rewardsReducer = (state={}, action) => {
    Object.freeze(state)
    
    switch (action.type) {
        case RECEIVE_ALL_REWARDS:
            // debugger;
            return Object.assign({}, state, action.rewards);
        case RECEIVE_REWARD:
            return Object.assign({}, state, { [action.rewardId]: action.reward });
        case REMOVE_REWARD:
            let nextState = Object.assign({}, state)
            delete nextState[action.rewardId]
            return nextState;
        default:
            return state;
    }
}

export default rewardsReducer;