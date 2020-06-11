import React from 'react';
// import rewardsForm from './rewards_form';

class RewardsShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.reward;
        // debugger;
    }

    componentDidMount() {
        // debugger;
        // this.props.fetchProjects();
        const projectId = this.props.match.params.projectId
        this.props.fetchReward(projectId);
    }

    render(){
        // debugger;
        const {reward} = this.props
        return(
            <div>
                <h4> Pledge ${reward.pledge_amount}</h4>
                <label>INCLUDES
                    <span>{reward.title}e</span>                   
                </label>

                <label htmlFor="">ESTIMATED DELIVERY
                    <span>{reward.estimated_delivery}</span>
                </label>

                <label htmlFor="">REWARD QUANTITY
                    <span>{reward.reward_quantity}</span>
                </label>
            </div>
        )
    }
}

export default RewardsShow;