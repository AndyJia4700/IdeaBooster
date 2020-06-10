import { connect } from "react-redux";
import rewardsForm from "./rewards_form";

const mSTP = state =>({
    reward: {
        title: '',
        description: '',
        project_id: '',
        pledge_amount: '',
        reward_quantity: '',
        shipping_option: '',
        time_limit: '',
        estimated_delivery: ''
    },
    formType: 'Create a reward'
});

const mDTP = dispatch => ({
    action: (project, reward) => dispatch(createReward((project, reward)))
})

export default connect(mSTP,mDTP)(rewardsForm)