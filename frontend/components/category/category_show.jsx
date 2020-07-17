import { connect } from 'react-redux';
import React from 'react';
import { fetchCategories } from '../../actions/category_actions';
import { fetchProjects } from "../../actions/project_actions";
import { fetchUsers } from "../../actions/user_actions";
import { Link } from "react-router-dom";



const mSTP = (state, ownProps) => {
    const categoryId = ownProps.match.params.categoryId;
    const category = state.categories[categoryId]
    const projects = Object.values(state.projects).filter(project => project.category_id == categoryId)
    
    return {
        category,
        projects,
        users: state.users,
    }
}

const mDTP = dispatch => {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
        fetchProjects: () => dispatch(fetchProjects()),
        fetchUsers: () => dispatch(fetchUsers()),

    }
}

class Category extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchCategories();
        this.props.fetchProjects();
        this.props.fetchUsers();
    }

    render(){
        const { projects, users } = this.props;

        return (
            <div>
                <div className="splash-category-div">
                    <ul className="splash-category-ul">
                        <li value="1" className="splash-category-li"><a className="splash-category-a" href="#/categories/1">Arts</a></li>
                        <li value="2" className="splash-category-li"><a className="splash-category-a" href="#/categories/2">Comics & Illustration</a></li>
                        <li value="3" className="splash-category-li"><a className="splash-category-a" href="#/categories/3">Design & Tech</a></li>
                        <li value="4" className="splash-category-li"><a className="splash-category-a" href="#/categories/4">Film</a></li>
                        <li value="5" className="splash-category-li"><a className="splash-category-a" href="#/categories/5">Food & Craft</a></li>
                        <li value="6" className="splash-category-li"><a className="splash-category-a" href="#/categories/6">Games</a></li>
                        <li value="7" className="splash-category-li"><a className="splash-category-a" href="#/categories/7">Music</a></li>
                        <li value="8" className="splash-category-li"><a className="splash-category-a" href="#/categories/8">Publishing</a></li>
                    </ul>
                </div>

                <div className="empty-div">
                </div>
            
                <div className="splash-feature-recommend">
                <div className="splash-featured-div">
                    <h4 className="splash-projects-font">FEATURED PROJECT</h4>
                    <div>
                    {projects.slice(0, 1).map((project) => (
                        <div key={project.id}>
                        <Link
                            to={`/projects/${project.id}`}
                            className="feature-link"
                        >
                            <img
                            className="project-feature-picture1"
                            src={project.pictureUrl}
                            />
                            <h2 className="feature-title">{project.title}</h2>
                            <br />
                            <p className="feature-subtitle">{project.subtitle}</p>
                            <p> By {users[project.creator_id].username} </p>
                            {/* {this.state.entites.users[project.creator_id].username} */}
                        </Link>
                        </div>
                    ))}
                    </div>
                </div>

                <div className="splash-recommend-div">
                    <h4 className="splash-projects-font-rec">
                    RECOMMENDED FOR YOU
                    </h4>
                    <ul className="splash-projects-ul">
                    <div>
                        {projects.slice(1, 4).map((project) => (
                        <li key={project.id}>
                            <Link
                            to={`/projects/${project.id}`}
                            className="rec-link"
                            >
                            <div className="project-rec-li">
                                <div>
                                <img
                                    className="project-feature-picturelist"
                                    src={project.pictureUrl}
                                />
                                </div>

                                <div className="project-rec-title-li">
                                    <p className="rec-title">{project.title}</p>
                                    {/* <br/> */}
                                    <span className="rec-fund-span">0% funded</span>

                                    <div className="rec-icon-div">
                                        <img
                                        src={window.likeURL}
                                        className="rec-icon"
                                        />
                                        <img
                                        src={window.dislikeURL}
                                        className="rec-icon"
                                        />
                                    </div>
                                </div>

                                <p> By {users[project.creator_id].username} </p>

                            </div>
                            </Link>
                        </li>
                        ))}
                    </div>
                    </ul>
                </div>
                </div>

                <div className="empty-div"></div>
                <div className="empty-div"></div>

                <div className="splash-fresh-div">
                <h4 className="splash-projects-font-fresh">FRESH FAVORITES</h4>
                <ul className="splash-projects-ul">
                    <div className="fresh-div">
                    {projects.slice(4, 8).map((project) => (
                        <li key={project.id} className="fresh-li">
                        <Link
                            to={`/projects/${project.id}`}
                            className="fresh-link"
                        >
                            <div className="project-fresh-li">
                                <div>
                                    <img
                                    className="project-fresh-picturelist"
                                    src={project.pictureUrl}
                                    />
                                </div>

                                <div className="project-fresh-title-li">
                                    <p className="fresh-title">{project.title}</p>
                                    <br />
                                    <p className="fresh-subtitle">{project.subtitle}</p>
                                </div>
                            </div>

                            <p> By {users[project.creator_id].username} </p>
                        </Link>
                        </li>
                    ))}
                    </div>
                </ul>
                </div>

                <div className="splash-fresh-div">
              <h4 className="splash-projects-font-fresh">TAKING OFF</h4>
              <ul className="splash-projects-ul">
                <div className="fresh-div">
                  {projects.slice(8, 20).map((project) => (
                    <li key={project.id} className="fresh-li">
                      <Link
                        to={`/projects/${project.id}`}
                        className="fresh-link"
                      >
                        <div className="project-fresh-li">
                          <div>
                            <img
                              className="project-fresh-picturelist"
                              src={project.pictureUrl}
                            />
                          </div>

                          <div className="project-fresh-title-li">
                            <p className="fresh-title">{project.title}</p>
                            <br />
                            <p className="fresh-subtitle">{project.subtitle}</p>
                          </div>
                        </div>

                        <p> By {users[project.creator_id].username} </p>
                      </Link>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
            </div>
        );
    }
}

export default connect(mSTP, mDTP)(Category);
