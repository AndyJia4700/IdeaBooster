import { connect } from "react-redux";
import React from "react";
import { Redirect } from "react-router-dom";

const mSTP = (state) => {
  return {
    projects: Object.values(state.projects),
  };
};

class SearchBar extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            search: "",
            searched: false
        }
        this.update = this.update.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidUpdate(){
        if(this.state.searched){
           this.setState({
             searched: false,
           }); 
        }
    }

    handleSearch(e){
        e.preventDefault;
        this.setState({
            searched: true
        })
    }

    update(field){
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    render(){
        const searchBar = (
          <form onSubmit={this.handleSearch}>
            <input
              type="text"
              className="inputtest"
              value={this.state.search}
              onChange={this.update("search")}
            />
            <span onClick={this.props.close}> X </span>
          </form>
        );

        const search = <p onClick={this.handleSearch}>Search</p>

        // const search = this.state.searched ? <Redirect to={'/discovery'}/> : null
        const searched = !this.state.searched ?  search: searchBar
        return (
            <div className="searchTest">
                {searched}
            </div>
        )
    }

}


export default connect(mSTP, null)(SearchBar);
