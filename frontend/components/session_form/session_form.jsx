import React from 'react';

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.processForm(Object.assign({}, this.state));
    }

    renderErrors(){
        return (
            <ul>
                {
                    this.props.errors.map((error, i) => (
                        <li key={i}>
                            {error}
                        </li>
                    ))
                }
            </ul>
        )
    }

    render(){
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form">
                    New to IdeaBooster? {this.props.formType} or {this.props.navLink}
                    <div className="login-box">
                        <label>Username
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>

                        <label>Password
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>

                        <input type="submit" value={this.props.formType} className="session-submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;