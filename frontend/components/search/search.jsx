import { connect } from "react-redux";
import React from "react";

const mSTP = (state) => {
  return {
    projects: Object.values(state.projects),
  };
};


class Search extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.state = {
            search: "",
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const searchKey = this.state.search.toLowerCase();
        const projects = this.props.projects
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].title.toLowerCase().includes(searchKey)) {
              console.log(projects[i]);
            }
        }
    }

    update(field){
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            });
        }
    }
    
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    className="search-bar"
                    placeholder="Search for projects or categories"
                    value={this.props.search}
                    onChange={this.update('search')}
                />
                
                <div>
                    
                </div>

                <button> X </button>
            </form>
        )
    }
}


export default connect(mSTP, null)(Search);
