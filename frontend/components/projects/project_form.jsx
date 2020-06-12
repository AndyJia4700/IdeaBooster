import React from 'react';
import { updateProject } from '../../actions/project_actions';
import { Link } from 'react-router-dom';

updateProject
class ProjectForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.project;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.update = this.update.bind(this);
        // debugger;
    }

    componentDidMount(){
        // debugger
        // subtitle = document.getElementById('welcome-subtitle')
        this.setState({
            creator_id: currentUser.id,
            // subtitle: subtitle,
            category_id: '1',
            location_id: '1'
        })
        
    }

    handleFile(e){
        e.preventDefault();
        // debugger;
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({
                pictureFile: file,
                pictureUrl: fileReader.result
            });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        } else {
            this.setState({ pictureUrl:"", pictureFile: null});
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.action(this.state);
        // debugger
        const formData = new FormData();
        // formData.append('project[id]', this.state.id);
        formData.append('project[title]', this.state.title);
        formData.append('project[subtitle]',this.state.subtitle);
        formData.append('project[funding_goal]', this.state.funding_goal);
        formData.append('project[category_id]', this.state.category_id);
        formData.append('project[location_id]', this.state.location_id);
        if (this.state.pictureFile){
            formData.append('project[picture]', this.state.pictureFile);
        } 
        this.props.action(formData)
    }

    update(field){
        // debugger
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render(){
        // debugger
        // console.log(this.state.id);
        const preview = this.state.pictureUrl ? <img src={this.state.pictureUrl} /> :null;
        return (

            <form onSubmit={this.handleSubmit}>
                <div className="project-new-top-div">

                    <ul className="project-new-top-ul">
                        <li className="project-new-top-li">
                            <a className="project-new-top-a">
                                <img src={window.basicsURL} className="project-new-top-img" />
                                <br/>
                                <span>Basics</span>
                            </a>
                        </li>

                        <li className="project-new-top-li">
                            <a className="project-new-top-a">
                                <img src={window.fundingURL} className="project-new-top-img" />
                                <br />
                                <span className="not-done">Funding</span>
                            </a>
                        </li>

                        <li className="project-new-top-li">
                            <Link to={`/projects/${this.state.id}/rewards`} className="project-new-top-a">
                                {/* <a href="" className="project-new-top-a"> */}
                                <img src={window.rewardsURL} className="project-new-top-img" />
                                <br/>
                                <span>Rewards</span>
                            </Link>
                        </li>

                        <li className="project-new-top-li">
                            <a className="project-new-top-a">
                                <img src={window.storyURL} className="project-new-top-img" />
                                <br />
                                <span className="not-done">Story</span>
                            </a>
                        </li>

                        <li className="project-new-top-li">
                            <a className="project-new-top-a">
                                <img src={window.peopleURL} className="project-new-top-img" />
                                <br />
                                <span className="not-done">People</span>
                            </a>
                        </li>

                        <li className="project-new-top-li">
                            <a className="project-new-top-a">
                                <img src={window.paymentURL} className="project-new-top-img" />
                                <br />
                                <span className="not-done">Payment</span>
                            </a>
                        </li>

                        <li className="project-new-top-li">
                            <a className="project-new-top-a">
                                <img src={window.promotionURL} className="project-new-top-img" />
                                <br />
                                <span className="not-done">Promotion</span>
                            </a>
                        </li>

                    </ul>

                </div>

                <div className="project-basic-top-div">
                    <div className="project-basic-top-subdiv">
                        <h4 className="project-basic-top-h4">Start with the basics</h4>
                        <p className="project-basic-top-p">Make it easy for people to learn about your project.</p>
                    </div>
                </div>
                <br/>
                <div className="project-basic-div">
                    <div className="project-basic-subdiv1">
                        <p className="project-basic-hilight">Project title</p>
                        <p className="project-basic-hilight-p">Write a clear, brief title that helps people quickly understand the gist of your project</p>
                    </div>

                    <div className="project-basic-subdiv2">
                        <label className="project-basic"> 
                            <span className="project-basic-span">Title</span>
                        <input type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                            placeholder="Radiotopia: A Storytelling Revolution"
                            className="project-basic-input"
                        />
                        </label>

                        <br />
                        
                        <label className="project-basic">
                            <span className="project-basic-span">Subtitle</span>
                        <textarea
                                value={this.state.subtitle}
                                onChange={this.update('subtitle')}
                                className="project-basic-input"
                                placeholder="We are a collective of amazing storytelling radio show. Let's remake public raido together."
                            />
                        </label>
                    </div>
                </div>

                <br/>

                <div className="project-basic-div">
                    <div className="project-basic-subdiv1">
                        <p className="project-basic-hilight">Project category</p>
                        <p className="project-basic-hilight-p">Choose the category that most closely aligns with your project.</p>
                    </div>

                    <div className="project-basic-subdiv2">
                        <label className="project-basic">
                            <select onChange={this.update('category_id')} className="project-basic-input">
                                {/* <option value={document.getElementById('welcome-')}></option> */}
                                <option value="1">Arts</option>
                                <option value="2">Comic & Illustration</option>
                                <option value="3">Design & Tech</option>
                                <option value="4">Film</option>
                                <option value="5">Food & Craft</option>
                                <option value="6">Games</option>
                                <option value="7">Music</option>
                                <option value="8">Publishing</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div className="project-basic-div">
                    <div className="project-basic-subdiv1">
                        <p className="project-basic-hilight">Project location</p>
                        <p className="project-basic-hilight-p">Enter the location that best describles where your project is based.</p>
                    </div>

                    <div className="project-basic-subdiv2">
                        <label className="project-basic">
                            <select onChange={this.update('location_id')} className="project-basic-input">
                                <option value='1'>Australia</option>
                                <option value='2'>Austria</option>
                                <option value='3'>Belgium</option>
                                <option value="4">Canada</option>
                                <option value="5">France</option>
                                <option value="6">Germany</option>
                                <option value="7">Italy</option>
                                <option value="8">Japan</option>
                                <option value="9">the United Kingdom</option>
                                <option value='10'>the United States</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div className="project-basic-div">
                    <div className="project-basic-subdiv1">
                        <p className="project-basic-hilight">Project image</p>
                        <p className="project-basic-hilight-p">Add an image that clearly represents your projects.</p>
                    </div>

                    <div className="project-basic-subdiv2">
                        <div>
                            <input type="file"
                                className="project-basic-input"
                                onChange={this.handleFile}
                            />
                            {preview}
                        </div>
                    </div>
                </div>

                <div className="project-basic-div">
                    <div className="project-basic-subdiv1">
                        <p className="project-basic-hilight">Funding goal</p>
                        <p className="project-basic-hilight-p">Set an achievable goal that covers what you need to complete your project.</p>
                    </div>

                    <div className="project-basic-subdiv2">
                        <label className="project-basic">
                            <span className="project-basic-span">Goal amount</span>
                        
                            <input type="number"
                                value={this.state.funding_goal}
                                onChange={this.update('funding_goal')}
                                placeholder="0"
                                className="project-basic-input"
                            />
                        </label>
                    </div>
                    <br />
                </div>

                <div className="project-basic-div">
                    <div className="project-basic-subdiv1">
                        <p className="project-basic-hilight">Target launch date</p>
                        <p className="project-basic-hilight-p">Enter a date when you plan to launch, we won't automatically launch your project.</p>
                    </div>

                    <div className="project-basic-subdiv2">
                        <label className="project-basic">
                            <input type="date"
                                value={this.state.launch_date}
                                onChange={this.update('launch_date')}
                                // className="project-basic-input"
                            />
                        </label>
                    </div>
                    <br />
                </div>

                <div className="project-basic-div">
                    <div className="project-basic-subdiv1">
                        <p className="project-basic-hilight">Campaign duration</p>
                        <p className="project-basic-hilight-p">Set a time limit for your campaign.</p>
                    </div>

                    <div className="project-basic-subdiv2">
                        <label className="project-basic">
                            <input type="date"
                                value={this.state.end_date}
                                onChange={this.update('end_date')}
                            />
                        </label>
                    </div>
                    <br />
                </div>
                
                
                <button type="submit" value={this.props.formType}>Next</button>
                
                
            </form>

        );
    }
}

export default ProjectForm;