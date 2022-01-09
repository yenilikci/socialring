import React, {Component} from 'react';
import Input from "../components/Input";
import {withTranslation} from "react-i18next";
import {login} from '../api/apiCalls';
import axios from "axios";

class LoginPage extends Component {
    state = {
        username: null,
        password: null,
        error: null,
        pendingApiCall: false
    }

    componentDidMount() {
        axios.interceptors.request.use((request) => {
            this.setState({
                pendingApiCall: true
            });
            return request;
        });

        axios.interceptors.response.use((response) => {
            this.setState({
                pendingApiCall: false
            });
            return response;
        },(error) => {
            this.setState({
                pendingApiCall: false
            });
            throw error;
        });
    }

    onChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
            error: null
        })
    };

    onClickLogin = async event => {
        event.preventDefault();
        const {username, password} = this.state;
        const creds = {
            username,
            password
        };
        this.setState({
            error: null
        });
        try {
            await login(creds);
        } catch (apiError) {
            this.setState({
                error: apiError.response.data.message
            });
        }
    };

    render() {
        const {t} = this.props;
        const {username,password,error, pendingApiCall} = this.state;
        const buttonEnabled = username && password;

        return (
            <div className="container">
                <form action="">
                    <h1 className="text-center">{t('Login')}</h1>
                    <Input label={t('Username')} name="username" onChange={this.onChange}/>
                    <Input label={t('Password')} name="password" type="password" onChange={this.onChange}/>
                    {error &&
                    <div className="alert alert-danger mt-2">
                        {error}
                    </div>}
                    <div className="text-center">
                        <button className="btn btn-primary mt-4"
                                onClick={this.onClickLogin}
                                disabled={!buttonEnabled || pendingApiCall  }
                        >{t('Login')}</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withTranslation()(LoginPage);
