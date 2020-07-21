import React from 'react';
import SearchBar from '../search/searchbar';
// import {connect} from 'react-redux';
// import SessionShowContainer from "./session_bar/session_show_container";


class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showSearch: false
        }
    }

    render(){
       const nav = (
        <nav className="top-bar">
           <div className="explore-start">
             <div className="explore">
               <a className="top-font" href="/#/discovery">
                 Explore
               </a>
             </div>

             <div className="start">
               <a className="top-font" href="/#/projects/hello">
                 Start a project
               </a>
             </div>
           </div>

           <a href="/" className="ideaBooster-icon">
             IdeaBooster
           </a>
           <br />
           <div className="search-login">
             <div className="search">
               <h4 className="top-font">
                 {/* Search */}
                 <SearchBar />
               </h4>
             </div>

             <div className="login-button">
               <h4 className="top-font">
                 {/* <SessionShowContainer /> */}
               </h4>
             </div>
           </div>
         </nav>
        ); 

        return(
            {nav}
        )
        
    }
}

export default NavBar;