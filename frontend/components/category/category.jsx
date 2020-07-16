import { connect } from 'react-redux';
import React from 'react';
import { fetchCategories } from '../../actions/category_actions';

const mSTP = state => {
    return {
        categories: Object.values(state.categories),
        projects: Object.values(state.projects)
    }
}

const mDTP = dispatch => {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
        fetchProjects: () => dispatch(fetchProjects())
    }
}

class Category extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchCategories();
        this.props.fetchProjects();
    }

    render(){
        
        return (
            <div>
                here is category
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(Category);
