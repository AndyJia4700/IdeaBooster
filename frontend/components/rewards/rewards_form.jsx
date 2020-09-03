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
        <div className="project-basic-top-div">
          <div className="project-basic-top-subdiv">
            <h3 className="project-basic-top-h4">Add your rewards</h3>
            <p className="project-basic-top-p">
              Offer simple, meaningful rewards that bring backers closer to
              your project.
            </p>
          </div>
        </div>

        <div className="project-basic-div">
          <div className="project-basic-subdiv1">
            <p className="project-basic-hilight">Briefly describe this reward.</p>
          </div>
          <div className="project-basic-subdiv2">
            <label className="project-basic">
              <span className="project-basic-span">Title</span>
              <input
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                placeholder="Signed limited-edition"
                className="project-basic-input"
              />
            </label>
          </div>
        </div>

        <div className="project-basic-div">
          <div className="project-basic-subdiv1">
            <p className="project-basic-hilight">
              Set a minimum pledge amount for this reward.
            </p>
          </div>
          
          <div className="project-basic-subdiv2">
            <label className="project-basic">
              <span className="project-basic-span">Pledge amount</span>
              <input
                type="number"
                value={this.state.pledge_amount}
                onChange={this.update("pledge_amount")}
                placeholder="1"
                className="project-basic-input"
              />
            </label>
          </div>
        </div>

        <div className="project-basic-div">
          <div className="project-basic-subdiv1">
            <p className="project-basic-hilight">
              Describe this reward in more detail.
            </p>
          </div>
          <div className="project-basic-subdiv2">
            <label className="project-basic">
              <span className="project-basic-span">Description</span>

              <textarea
                value={this.state.description}
                onChange={this.update("description")}
                placeholder="Get an early copy - hot off the presses!"
                className="project-basic-input"
              />
            </label>
          </div>
        </div>

        <div className="project-basic-div">
          <div className="project-basic-subdiv1">
            <p className="project-basic-hilight">
              Give yourself plenty of time. It's better to deliver to
              backers ahead of schedule than behind.
            </p>
          </div>

          <div className="project-basic-subdiv2">
            <label className="project-basic">
              <span className="project-basic-span">Estimated delivery</span>

              <input
                type="date"
                value={this.state.estimated_delivery}
                onChange={this.update("estimated_delivery")}
                className="project-basic-input"
              />
            </label>
          </div>
        </div>

        <div className="project-basic-div">
          <div className="project-basic-subdiv1">
            <p className="project-basic-hilight">
              You may want to limit the quantity of this reward available to
              backers.
            </p>
          </div>
          <div className="project-basic-subdiv2">
            <label className="project-basic">
              <span className="project-basic-span">Reward quantity</span>

              <input
                type="number"
                value={this.state.reward_quantity}
                onChange={this.update("reward_quantity")}
                className="project-basic-input"
              />
            </label>
          </div>
        </div>

        <div className="project-basic-div">
          <button type="submit" className="back-btn" onClick={() => alert("Reward is saved")}>Save</button>
        </div>

      </form>
        );
    }
}

export default rewardsForm;