import { connect } from "react-redux";
import React from "react";
import { fetchProjects } from "../../actions/project_actions";
import { fetchUsers } from "../../actions/user_actions";
import { Link } from "react-router-dom";

const mSTP = (state, ownprops) => {
    return {
        projects: Object.values(state.projects),
        users: state.users,
        keyword: ownprops.match.params.keyword,
    };
};

const mDTP = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

class SearchKeyword extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    // this.state = {
    //   search: "",
    // };
  }

  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchUsers();
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    let i = 0;
    const users = this.props.users;
    const searchKey = this.props.keyword.toLowerCase();
    const searchedProjects = this.props.projects.map((project) => {
      if (project.title.toLowerCase().includes(searchKey)) {
        i++;
        return (
          <li key={project.id} className="project-id-li">
            <div className="project-id-outdiv">
              <div className="project-id-div">
                <Link to={`/projects/${project.id}`} className="project-id-a">
                  <img
                    className="project-id-picture"
                    src={project.pictureUrl}
                  />

                  <br />

                  <p className="project-explore-title">{project.title}</p>

                  <br />

                  <p className="project-explore-subtitle">{project.subtitle}</p>

                  <p className="project-explore-subtitle"> By {users[project.creator_id].username} </p>
                </Link>
              </div>
            </div>
          </li>
        );
      }
    });

    return (
      <form onSubmit={this.handleSubmit}>
        {/* <div>
          <input
            type="text"
            className="search-bar"
            placeholder="Search for projects or categories"
            value={this.props.search}
            onChange={this.update("search")}
          />
        </div> */}

        <div className="project-index-div">
          <br />
          Explore <span>{i} projects</span>
          <br />
          <ul className="project-index-ul">{searchedProjects}</ul>
        </div>

        {/* <button> X </button> */}
      </form>
    );
  }
}

export default connect(mSTP, mDTP)(SearchKeyword);
