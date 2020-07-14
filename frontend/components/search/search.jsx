import React from "react";

class Search extends React.Component {
    constructor(props){
        super(props);

    }

    

    render(){
        return (
            <form action="">
                <input type="text"
                    className="search-bar"
                    type="text"
                    placeholder="Search for projects or categories"
                    
                />

                <button> X </button>
            </form>
        )
    }
}

export default Search;