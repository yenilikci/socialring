import React from 'react';
import axios from 'axios';
import {signup} from '../api/apiCalls';

//stateful component
class UserSignupPage extends React.Component {

    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
        pendingApiCall: false
    }

    onChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    onClickSignUp = async event => {
        event.preventDefault();

        const {username, displayName, password} = this.state;

        const body = {
            username,
            displayName,
            password
        };

        this.setState({pendingApiCall: true});

        // signup(body).then(response => {
        //     this.setState({pendingApiCall: false});
        // }).catch(error => {
        //     this.setState({pendingApiCall: false});
        // });
        
        try{
            const response = await signup(body);
            this.setState({pendingApiCall: false});
        } catch(error) {
            this.setState({pendingApiCall: false});
        }

    }

    //overrided render method
    render() {
        const {pendingApiCall} = this.state;
        return (
          <div className="container">
              <form>
                  <h1 className="text-center">
                      Sign up
                  </h1>
                  <div className="form-group">
                      <label>Username</label>
                      <input type="text"
                             className="form-control"
                             name="username"
                             onChange={this.onChange}
                      />
                  </div>
                  <div>
                      <label>Display Name</label>
                      <input type="text"
                             className="form-control"
                             name="displayName"
                             onChange={this.onChange}/>
                  </div>
                  <div>
                      <label>Password</label>
                      <input type="password"
                             className="form-control"
                             name="password"
                             onChange={this.onChange}
                      />
                  </div>
                  <div>
                      <label>Password Repeat</label>
                      <input type="password"
                             className="form-control"
                             name="passwordRepeat"
                             onChange={this.onChange}
                      />
                  </div>
                  <div className="text-center">
                      <button
                          disabled={pendingApiCall}
                          className="btn btn-primary"
                          onClick={this.onClickSignUp}>
                          {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>} Sign Up
                      </button>
                  </div>
              </form>
          </div>
        );
    };
}

export default UserSignupPage;
