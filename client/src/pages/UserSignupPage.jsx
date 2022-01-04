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
        pendingApiCall: false,
        errors: {
            username: ""
        }
    };

    onChange = event => {
        const {name, value} = event.target;

        const errors = {...this.state.errors}
        errors[name] = undefined

        this.setState({
            [name]: value,
            errors
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
        
        try{
            const response = await signup(body);
        } catch(error) {
            if(error.response.data.validationErrors){
                this.setState({errors: error.response.data.validationErrors});
            }
        }
        this.setState({pendingApiCall: false});

    }

    //overrided render method
    render() {
        const {pendingApiCall, errors} = this.state;
        const {username, displayName} = errors;
        return (
          <div className="container">
              <form>
                  <h1 className="text-center">
                      Sign up
                  </h1>
                  <div className="form-group">
                      <label>Username</label>
                      <input type="text"
                             className={username?"form-control is-invalid":"form-control"}
                             name="username"
                             onChange={this.onChange}
                      />
                      <div className="invalid-feedback">
                        {username}
                      </div>
                  </div>
                  <div>
                      <label>Display Name</label>
                      <input type="text"
                             className={displayName?"form-control is-invalid":"form-control"}
                             name="displayName"
                             onChange={this.onChange}/>
                      <div className="invalid-feedback">
                        {displayName}
                      </div>
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
