import React from 'react';

class WelcomeBar3 extends React.Component {
    render() {
        return (
            <div className="welcome-div">
                <div className="welcome-div-title">
                    <h1>Finally, let's confirm your eligibility.</h1>
                </div>

                <div className="welcome-div-intro">
                    <p>Tell us where you're based and confirm a few other details before we proceed.</p>
                </div>

                <div className="welcome-div-select">
                    <select className="project-basic-input">
                        <option value="">Select your country</option>
                        <option value='1'>Australia</option>
                        <option value='2'>Austria</option>
                        <option value='3'>Belgium</option>
                        <option value="4">Canada</option>
                        <option value="5">France</option>
                        <option value="6">Germany</option>
                        <option value="7">Italy</option>
                        <option value="8">Japan</option>
                        <option value="9">the United Kingdom</option>
                        <option value='10'>the United States</option>
                    </select>
                </div>

                <div>         
                    <div>   
                        <input type="checkbox" />
                        <label>I am at least 18 years old.</label>  
                    </div> 
                    <div>                 
                        <input type="checkbox" />
                        <label>I can verify an address and bank account.</label>  
                    </div>  
                    <div>            
                        <input type="checkbox" />
                        <label>I can verify a government issued ID.</label>
                    </div>  
                    <div>
                        <input type="checkbox" />
                        <label>I have a debit and /or credit card.</label>    
                    </div>            
                </div>

                <div className="welcome-div-button">
                    <a href="#/projects/hello2">
                        <button>Project idea</button>
                    </a>
                    
                    <a href="#/projects/new">
                        <button>Continue</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default WelcomeBar3;