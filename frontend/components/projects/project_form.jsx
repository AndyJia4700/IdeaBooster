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
        // debugger;
        const formData = new FormData();
        formData.append('project[title]', this.state.title);
        formData.append('project[subtitle]',this.state.subtitle);
        formData.append('project[funding_goal]', this.state.funding_goal);
        formData.append('project[category_id]', this.state.category_id);
        formData.append('project[location_id]', this.state.location_id);

        if (this.state.pictureFile){
            formData.append('project[picture]', this.state.pictureFile);
        } 

        this.props.action(formData)
        // $.ajax({
        //     method: 'POST',
        //     url: '/api/projects',
        //     data: formData,
        //     contentType: false,
        //     processData: false,
        //     dataType: "json"
        // });
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render(){
        // console.log(this.state);
        const preview = this.state.pictureUrl ? <img src={this.state.pictureUrl} /> :null;
        
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
                        <div>
                            <input type="file"
                                onChange={this.handleFile}
                            />
                            {preview}
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

                <div className="project-basic-div">
                    <div className="project-basic-subdiv1">
                        <p className="project-basic-hilight">Target launch date</p>
                        <p>Enter a date when you plan to launch, we won't automatically launch your project.</p>
                    </div>

                    <div className="project-basic-subdiv2">
                        <label className="project-basic">
                            <input type="date"
                                value={this.state.launch_date}
                                onChange={this.update('launch_date')}
                            />
                        </label>
                    </div>
                    <br />
                </div>

                <div className="project-basic-div">
                    <div className="project-basic-subdiv1">
                        <p className="project-basic-hilight">Campaign duration</p>
                        <p>Set a time limit for your campaign.</p>
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
                

                <button type="submit" value={this.props.formType}>Test Submit</button>
                
            </form>

        );
    }
}

export default ProjectForm;