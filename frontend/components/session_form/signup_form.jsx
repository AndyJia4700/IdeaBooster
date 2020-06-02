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

    // renderErrors(){
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

    render(){
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form">
                    Have an account? {this.props.navLink}
                    <h2>Sign Up</h2>
                    <div className="signup-box">
                        <label>email
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="signup-input"
                            />
                        </label>
                        <br/>
                        <label>username
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="signup-input"
                            />
                        </label>
                        <br/>
                        <label>Password
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="signup-input"
                            />
                        </label>

                        <input type="submit" value={this.props.formType} className="session-submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignupForm;