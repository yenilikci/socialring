import React from 'react';

//stateful component
class UserSignupPage extends React.Component{
    //overrided render method
    render(){
        return(
            <form>
                <h1>
                    Sign up
                </h1>
                <div>
                    <label>Username</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Display Name</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password"/>
                </div>
                <div>
                    <label>Password Repeat</label>
                    <input type="password"/>
                </div>
                <button>Sign Up</button>
            </form>
        );
    };
}

export default UserSignupPage;
