import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            // username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.login(Object.assign({}, this.state));
    }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {
    //                 this.props.errors.map((error, i) => (
    //                     <li key={i}>
    //                         {error}
    //                     </li>
    //                 ))
    //             }
    //         </ul>
    //     )
    // }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form">
                    <h2>Log in</h2>

                    <div className="login-box">
                        <label>email
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        {/* <label>username
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br /> */}
                        <label>Password
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>

                        <input type="submit" value={this.props.formType} className="session-submit" />
                        <br/>
                        New to IdeaBooster? {this.props.navLink}
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm;