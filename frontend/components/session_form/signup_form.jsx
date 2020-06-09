import React from 'react';

class SignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            username: "",
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
        this.props.createNewUser(Object.assign({}, this.state));
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

    render(){
        return (
            <div className="div-session-background">
                <div className="signup-form-container">
                    <form onSubmit={this.handleSubmit} className="signup-form">
                    <span>
                        <p className="have-account-msg">Have an account?  { this.props.navLink }</p>
                    </span>
                    <label className="signup-lable">Sign up</label>
                    <div className="signup-errors">{this.renderErrors()}</div>
                    <div className="signup-box">
                        
                        <input type="text"
                            placeholder="Name"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="signup-input"
                        />
                        
                        <br />

                        
                        <input type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="signup-input"
                        />
                       
                        <br/>
                       
            
                        <input type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="signup-input"
                        />
                        
                        <br/>

                        <input type="submit" value={this.props.formType} className="signup-submit"/>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

export default SignupForm;