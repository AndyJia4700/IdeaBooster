import React from 'react';
import { connect } from "react-redux";
import { fetchProjects, fetchProject } from '../../actions/project_actions';
import { fetchRewards, fetchReward, updateReward } from "../../actions/reward_actions";

const mSTP = (state, ownProps) => {
  const projectId = ownProps.match.params.projectId;
  const project = state.projects[projectId];
  return {
    project,
    reward: state.rewards[projectId],
  }
};

const mDTP = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    fetchProject: projectId => dispatch(fetchProject(projectId)),
    fetchRewards: () => dispatch(fetchRewards()),
    fetchReward: (reward) => dispatch(fetchReward(reward)),
    updateReward: (reward) => dispatch(updateReward(reward)),
  };

};

class Backs extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.reward;
    this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.changeBtn = this.changeBtn.bind(this);
    this.update = this.update.bind(this);
    this.forwardback = this.forwardback.bind(this);
  };

  componentDidMount() {
    this.props.fetchRewards();
  }

  changeBtn(){
    const pledgeInput = document.getElementById("pledge_input").value;
    const pledgeMore = document.getElementById("pledge_more").value;
    (pledgeInput > 0) ? document.getElementsByName("btn-test")[0].className = "back-btn" : document.getElementsByName("btn-test")[0].className = "unclickable-btn";
    (pledgeMore > this.props.reward.pledge_amount-1) ? document.getElementsByName("btn-test")[1].className = "back-btn" : document.getElementsByName("btn-test")[1].className = "unclickable-btn";
  }


  handleSubmit1(e) {
    e.preventDefault();
    const amount = document.getElementById("pledge_input").value;
    this.setState({
      total_fund: parseInt(this.state.total_fund) + parseInt(amount),
      total_backer: parseInt(this.state.total_backer + 1)
    });
    this.props.updateReward(this.state);
  }
  

  handleSubmit2(e){
    e.preventDefault();
    const origin = this.props.reward.pledge_amount;
    const more = document.getElementById("pledge_more").value;
    const amount = (
      (more > origin) ? more : origin
    );

    this.setState({
      total_fund: parseInt(this.state.total_fund) + parseInt(amount),
      total_backer: parseInt(this.state.total_backer + 1)
    });
    this.props.updateReward(this.state);
  }
  
  forwardback(e){
    e.preventDefault();
    window.location.href = `#/projects/${this.props.match.params.projectId}`;
  }

  update(field) {
    return e => this.setState({ 
      [field]: e.currentTarget.value,
    })
  }

  modal(){
    const modalBtn = document.getElementById('modalBtn');
    modalBtn.addEventListener('click', this.openModal);
  }

  openModal(e) {
    e.preventDefault();
    const modal = document.getElementById('simpleModal');
    modal.style.display = 'block';
  }

  render(){
    if(this.state===null) this.forwardback(event);
    const { reward } = this.props;
    if(!this.props.reward) return (
      <div>
        Fake Project, Do not waste your money!!
      </div>
    );

    return (
      <section className="back-section">
        <div id="simpleModal" className="modal">
          <div className="modal-content">
            <h3>Thank you!!!</h3>
            <button onClick={() => { this.handleSubmit1(event), this.forwardback(event)}} className="back-btn">
              Pledge
            </button>
          </div>
        </div>

        <div>
          <h3>Support this project</h3>
          <p>Select an option below</p>
        </div>

        <div onSubmit={this.handleSubmit1} className="back-form">
          <input name="raido-btn" type="radio" className="checkbox-round" onChange={() => document.getElementById("hidden-div1").className = "display" } />
          <div className="rewards-option-div">
            <div>
              <p>
                Pledge without a reward
              </p>
              <br/>
              <p>
                Back it because you believe in it.
                Support the project for no reward, just because it speaks to you.
              </p>
              <div id="hidden-div1" className="hidden">
                <input type="number" id="pledge_input" 
                defaultValue="10"
                className="project-basic-input"
                onChange={this.changeBtn} 
                />
                <button id="modalBtn" name="btn-test" onClick={() => { this.handleSubmit1(event), this.openModal(event) }} className="back-btn">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>

        <div onSubmit={this.handleSubmit2} className="back-form">
          <input name="raido-btn" type="radio" className="checkbox-round" onChange={() => document.getElementById("hidden-div2").className = "display"}/>
          <div className="rewards-option-div">
          
          <div className="rewards-option-subdiv1">
            ${reward.pledge_amount} or more
            <br />
            <h4>{reward.title}</h4>
            <br />
            <p>{reward.description}</p>
            <br />
          </div>

          <div className="rewards-option-subdiv1">
            <p>ESTIMATED DELIVERY</p>
            {reward.estimated_delivery}
            
            <p>SHIPS TO Anywhere in the world</p>
          </div>
            
        </div>
          <div id="hidden-div2" className="hidden">
            <input type="number"
              id="pledge_more"
              className="project-basic-input"
              onChange={this.changeBtn}
              defaultValue={reward.pledge_amount}
            />

            <button id="modalBtn" name="btn-test" onClick={() => { this.handleSubmit2(event), this.openModal(event) }} className="back-btn">
              Continue
              </button>
          </div>

        </div>
      </section>
    );
  }
    
}

export default connect(mSTP, mDTP)(Backs);