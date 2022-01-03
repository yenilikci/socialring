import React from 'react';
import axios from 'axios';

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

    onClickSignUp = event => {
        event.preventDefault();

        const {username, displayName, password} = this.state;

        const body = {
            username,
            displayName,
            password
        };

        this.setState({pendingApiCall: true});

        axios.post("/api/1.0/users",
            body
        ).then(response => {
            this.setState({pendingApiCall: false});
        }).catch(error => {
            this.setState({pendingApiCall: false});
        });
    }

    //overrided render method
    render() {
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
                          disabled={this.state.pendingApiCall}
                          className="btn btn-primary"
                          onClick={this.onClickSignUp}>
                          {this.state.pendingApiCall && <span className="spinner-border spinner-border-sm"></span>} Sign Up
                      </button>
                  </div>
              </form>
          </div>
        );
    };
}

export default UserSignupPage;
