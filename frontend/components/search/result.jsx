import { connect } from "react-redux";
import React from "react";

const mSTP = state => {
  return {
    projects: Object.values(state.projects),
  };
};

const mDTP = dispatch =>{
    return null
}

class SearchResult extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                here is discovery
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(SearchResult);

