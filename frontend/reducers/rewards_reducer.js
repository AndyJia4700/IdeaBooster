import { RECEIVE_REWARD, REMOVE_REWARD } from "../actions/reward_actions";

const rewardsReducer = (state={}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_REWARD:
            return Object.assign({}, state, action.reward);
        case REMOVE_REWARD:
            let nextState = Object.assign({}, state)
            delete nextState[action.rewardId]
            return nextState;
        default:
            return null;
    }
}

export default rewardsReducer;