import React from 'react';
import axios from 'axios';

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

    onClickSignUp = event => {
        event.preventDefault();

        const {username, displayName, password} = this.state;

        const body = {
            username,
            displayName,
            password
        };
        axios.post("http://localhost:8080/api/1.0/users",
            body
        );
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
                <button
                onClick={this.onClickSignUp}>Sign Up</button>
            </form>
        );
    };
}

export default UserSignupPage;
