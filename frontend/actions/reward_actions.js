import * as RewardUtil from '../util/reward_util'
export const RECEIVE_ALL_REWARDS = 'RECEIVE_ALL_REWARDS';
export const RECEIVE_REWARD = 'RECEIVE_REWARD';
export const REMOVE_REWARD = 'REMOVE_REWARD';

const receiveAllRewards = rewards => ({
    type: RECEIVE_ALL_REWARDS,
    rewards
})

const receiveReward = reward => ({
    type: RECEIVE_REWARD,
    reward
});

const removeReward = rewardId => ({
    type: REMOVE_REWARD,
    rewardId
});

export const fetchRewards = () => dispatch => (
    RewardUtil.fetchRewards()
        .then(rewards => dispatch(receiveAllRewards(rewards)))
)

export const fetchReward = rewardId => dispatch => (
    RewardUtil.fetchReward(rewardId)
        .then(reward => dispatch(receiveReward(reward)))
);



export const createReward = (reward) => dispatch => (
    RewardUtil.createReward(reward)
        .then((reward) => dispatch(receiveReward(reward)))
);

export const updateReward = (reward) => dispatch => (
    RewardUtil.updateReward(reward)
        .then((reward) => dispatch(receiveReward(reward)))
);

export const deleteReward = rewardId => dispatch => (
    RewardUtil.deleteReward(rewardId)
        .then(() => dispatch(removeReward(rewardId)))
);
