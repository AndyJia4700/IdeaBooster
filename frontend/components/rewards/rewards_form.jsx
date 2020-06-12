import React from 'react';

class rewardsForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.reward;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        // debugger;
    }

    componentDidMount(){
        // debugger
        this.setState({
            project_id: this.props.match.params.projectId,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render(){
        // debugger;
        // const {rewards} = this.props.project
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="reward-div">
                    <div className="reward-title-div">
                        <h3 className="reward-title">Add your rewards</h3>
                        <p className="reward-intro">Offer simple, meaningful rewards that bring backers closer to your project.</p>
                    </div>

                    <div className="reward-details-div">
                        <div className="reward-divs">
                            <label className="reward-label">
                                <span className="reward-span">Title</span>
                                <p className="reward-intro-p">Briefly describe this reward.</p>
                                <input type="text"
                                    value={this.state.title}
                                    onChange={this.update('title')}
                                    placeholder="Signed limited-edition"
                                    className="reward-input"
                                />
                            </label>
                        </div>

                        <div className="reward-divs">
                            <label className="reward-label">
                                <span className="reward-span">Pledge amount</span>
                                <p className="reward-intro-p">Set a minimum pledge amount for this reward.</p>
                                <input type="number"
                                    value={this.state.pledge_amount}
                                    onChange={this.update('pledge_amount')}
                                    placeholder="1"
                                    className="reward-input"
                                />
                            </label>
                        </div>

                        <div className="reward-divs">
                            <label className="reward-label">
                                <span className="reward-span">Description</span>
                                <p className="reward-intro-p">Describe this reward in more detail.</p>

                                <textarea
                                    value={this.state.description}
                                    onChange={this.update('description')}
                                    placeholder="Get an early copy - hot off the presses!"
                                    className="reward-input-text"
                                />
                            </label>
                        </div>

                        <div className="reward-divs">
                            <label className="reward-label">
                                <span className="reward-span">Estimated delivery</span>
                                <p className="reward-intro-p">Give yourself plenty of time. It's better to deliver to backers ahead of schedule than behind.</p>

                                <input type="date"
                                    value={this.state.estimated_delivery}
                                    onChange={this.update('estimated_delivery')}
                                    className="reward-input"
                                />
                            </label>
                        </div>

                        <div className="reward-divs">
                            <label className="reward-label">
                                <span className="reward-span">Reward quantity</span>
                                <p className="reward-intro-p">You may want to limit the quantity of this reward available to backers.</p>

                                <input type="number"
                                    value={this.state.reward_quantity}
                                    onChange={this.update('reward_quantity')}
                                    className="reward-input"
                                />
                            </label>
                        </div>

                    </div>
                </div>

                <button type="submit">Save</button>
            </form>
        );
    }
}

export default rewardsForm;