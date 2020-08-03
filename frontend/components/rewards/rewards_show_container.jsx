// import { connect } from "react-redux";
// import { fetchRewards, fetchReward } from "../../actions/reward_actions";
// import RewardShow from "./rewards_show";

// const mSTP = (state, ownProps) => {
//     const projectId = ownProps.match.params.projectId;
//     const reward = state.rewards[projectId];
    
//     if (!reward) {
//       return {
//         reward: {
//           pledge_amount: 0,
//           title: "",
//           estimated_delivery: "",
//           reward_quantity: "",
//         },
//       };
//     } else {
//       return {
//         reward,
//       };
//     }

// }

// const mDTP = dispatch =>{
//     return {
//         fetchRewards: () => dispatch(fetchRewards()),
//         fetchReward: (rewardId) => dispatch(fetchReward(rewardId)),
//     }
// }

// export default connect(mSTP, mDTP)(RewardShow)