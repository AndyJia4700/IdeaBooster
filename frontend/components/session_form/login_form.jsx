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
        this.handleClick = this.handleClick.bind(this)
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

    renderErrors() {
        return (
            <ul>
                {
                    Object.values(this.props.errors)
                }
            </ul>
        );
    }

    handleClick(e){
        e.preventDefault();

        this.setState({
            email: "welcome@demo.com",
            password: "123456"
        }, () => this.props.login(Object.assign({}, this.state)))
    }

    render() {
        return (
            <div className="div-session-background">
                <div className="signup-form-container">
                    <form onSubmit={this.handleSubmit} className="signup-form">
                    <div className="signup-box">
                    <h4 className="signup-lable">Log in</h4>
                    <div className="signup-errors">{this.renderErrors()}</div>
                        
                        <input type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="signup-input"
                        />
                        
                        <br />
                    
                        <input type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="signup-input"
                        />
                       
                        <br/>
                        <input type="submit" value={this.props.formType} className="signup-submit" />
                        <br/> 
                            <div>
                                <div className="text-or">

                                    <div className="text">
                                        or
                                    </div>

                                </div>
                                
                            </div>
                            <button onClick={this.handleClick} className="signup-submit-Demo">Demo Login</button>
                        <br/>
                            <div className="have-account-msg">New to IdeaBooster?{this.props.navLink}</div>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;