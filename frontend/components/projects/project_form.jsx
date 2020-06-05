import React from 'react';

class ProjectForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.post;
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state);
    }

    render(){
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
                            onChang={this.update('title')}
                            placeholder="Radiotopia: A Storytelling Revolution"
                        />
                        </label>

                        <br />
                        
                        <label className="project-basic">Subtitle
                        <textarea
                                value={this.state.Subtitle}
                                onChang={this.update('Subtitle')}
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
                            <select name="" id="">
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
                            <select name="" id="">
                                <option value="1">Australia</option>
                                <option value="2">Austria</option>
                                <option value="3">Belgium</option>
                                <option value="4">Canada</option>
                                <option value="5">France</option>
                                <option value="6">Germany</option>
                                <option value="7">Italy</option>
                                <option value="8">Japan</option>
                                <option value="9">the United Kingdom</option>
                                <option value="10">the United States</option>
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
                        <label className="project-basic">
                            AWS HERE
                        </label>
                    </div>
                </div>
                


                
            </form>
        );
    }
}

export default ProjectForm;