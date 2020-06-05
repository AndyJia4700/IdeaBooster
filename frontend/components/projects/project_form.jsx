import React from 'react';

class ProjectForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.project;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount(){
        this.setState({
            creator_id: currentUser.id,
            launch_date: "2020 - 05- 05",
            end_date: "2020 - 05 - 05",

        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state);
    }

    handleFile(e){
        e.preventDefault();
        const formData = new FormFata();
        formData.append('project[title]', this.state.title);
        if (this.state.picture){
            formaData.append('project[picture]', this.state.picture)
        }
        // this.setState({picture: e.currentTarget.files[0]})
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render(){
        console.log(this.state.location_id);
        
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="project-basic-div">
                    <div className="project-basic-subdiv1">
                        <p className="project-basic-hilight">Project title</p>
                        <p>Write a clear, brief title that helps people quickly understand the gist of your project</p>
                    </div>

                    <div className="project-basic-subdiv2">
                        <label className="project-basic">Title
                        <input type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                            placeholder="Radiotopia: A Storytelling Revolution"
                        />
                        </label>

                        <br />
                        
                        <label className="project-basic">Subtitle
                        <textarea
                                value={this.state.subtitle}
                                onChange={this.update('subtitle')}
                                placeholder="We are a collective of amazing storytelling radio show. Let's remake public raido together."
                            />
                        </label>
                    </div>
                </div>

                <br/>

                <div className="project-basic-div">
                    <div className="project-basic-subdiv1">
                        <p className="project-basic-hilight">Project category</p>
                        <p>Choose the category that most closely aligns with your project.</p>
                    </div>

                    <div className="project-basic-subdiv2">
                        <label className="project-basic">
                            <select onChange={this.update('category_id')}>
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
                        <p>Enter the location that best describles where your project is based.</p>
                    </div>

                    <div className="project-basic-subdiv2">
                        <label className="project-basic">
                            <select onChange={this.update('location_id')}>
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
                        <p>Add an image that clearly represents your projects.</p>
                    </div>

                    <div className="project-basic-subdiv2">
                        <div onSubmit={this.handleSubmit}>
                            <input type="file"
                                onChange={this.update(this.handleFile)}
                            />
                        </div>
                    </div>
                </div>

                <div className="project-basic-div">
                    <div className="project-basic-subdiv1">
                        <p className="project-basic-hilight">Funding goal</p>
                        <p>Set an achievable goal that covers what you need to complete your project.</p>
                    </div>

                    <div className="project-basic-subdiv2">
                        <label className="project-basic">Goal amount
                            <input type="number"
                                value={this.state.funding_goal}
                                onChange={this.update('funding_goal')}
                                placeholder="0"
                            />
                        </label>
                    </div>
                    <br />
                </div>
                

                <button type="submit" value={this.props.formType}>Test Submit</button>
                
            </form>

        );
    }
}

export default ProjectForm;