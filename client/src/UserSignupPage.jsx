import React from 'react';

//stateful component
class UserSignupPage extends React.Component {

    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
    }

    onChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
  
    //overrided render method
    render() {
        return (
            <form>
                <h1>
                    Sign up
                </h1>
                <div>
                    <label>Username</label>
                    <input type="text"
                           name="username"
                           onChange={this.onChange}
                    />
                </div>
                <div>
                    <label>Display Name</label>
                    <input type="text"
                           name="displayName"
                           onChange={this.onChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password"
                           name="password"
                           onChange={this.onChange}
                    />
                </div>
                <div>
                    <label>Password Repeat</label>
                    <input type="password"
                           name="passwordRepeat"
                           onChange={this.onChange}
                    />
                </div>
                <button>Sign Up</button>
            </form>
        );
    };
}

export default UserSignupPage;
