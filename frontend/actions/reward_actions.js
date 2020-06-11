import * as RewardUtil from '../util/reward_util'

export const RECEIVE_REWARD = 'RECEIVE_REWARD';
export const REMOVE_REWARD = 'REMOVE_REWARD';


const receiveReward = reward => ({
    type: RECEIVE_REWARD,
    reward
});

const removeReward = rewardId => ({
    type: REMOVE_REWARD,
    rewardId
});

export const fetchReward = projectId => dispatch => (
    RewardUtil.fetchReward(projectId)
        .then(project => dispatch(receiveReward(project)))
);

export const createReward = (project, reward) => dispatch => (
    RewardUtil.createReward(project, reward)
        .then((project, reward) => dispatch(receiveReward(project, reward)))
);


export const deleteReward = projectId => dispatch => (
    RewardUtil.deleteReward(projectId)
        .then(() => dispatch(removeReward(projectId)))
);
