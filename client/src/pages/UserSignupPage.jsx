import React from 'react';
import {signup, changeLanguage} from '../api/apiCalls';
import Input from '../components/Input';
import {withTranslation} from "react-i18next";

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
        const {t} = this.props;
        const {name, value} = event.target;

        const errors = {...this.state.errors};
        errors[name] = undefined;

        //password && passwordRepeat mismatch check
        if (name === 'password' || name === 'passwordRepeat') {
            if (name === 'password' && value !== this.state.passwordRepeat) {
                errors.passwordRepeat = t('Password mismatch');
            } else if (name === 'passwordRepeat' && value !== this.state.password) {
                errors.passwordRepeat = t('Password mismatch');
            } else {
                errors.passwordRepeat = undefined;
            }
        }

        this.setState({
            [name]: value,
            errors
        });
    };

    onClickSignUp = async event => {
        event.preventDefault();

        const {username, displayName, password} = this.state;

        const body = {
            username,
            displayName,
            password
        };

        this.setState({pendingApiCall: true});

        try {
            const response = await signup(body);
        } catch (error) {
            if (error.response.data.validationErrors) {
                this.setState({errors: error.response.data.validationErrors});
            }
        }
        this.setState({pendingApiCall: false});

    }

    onChangeLanguage  = language => {
        const {i18n} = this.props;
        i18n.changeLanguage(language);
        changeLanguage(language);
    }

    //overrided render method
    render() {
        const {pendingApiCall, errors} = this.state;
        const {username, displayName, password, passwordRepeat} = errors;
        const  {t} = this.props;
        return (
            <div className="container">
                <form>
                    <h1 className="text-center">
                        {t('Sign up')}
                    </h1>
                    <Input name="username" label={t('Username')} error={username} onChange={this.onChange}/>
                    <Input name="displayName" label={t('Display Name')} error={displayName} onChange={this.onChange}/>
                    <Input name="password" label={t('Password')} error={password} onChange={this.onChange} type="password"/>
                    <Input name="passwordRepeat" label={t('Password Repeat')} error={passwordRepeat} onChange={this.onChange}
                           type="password"/>
                    <div className="text-center">
                        <button
                            disabled={pendingApiCall || passwordRepeat !== undefined}
                            className="btn btn-primary mt-4"
                            onClick={this.onClickSignUp}>
                            {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>}
                            {t('Sign up')}
                        </button>
                    </div>
                    <div>
                        <img
                            src="https://www.countryflags.com/wp-content/uploads/turkey-flag-png-large.png"
                            alt="Turkish Flag"
                            style={{width: 36, height: 24, marginRight: 5, cursor: 'pointer'}}
                            onClick={() => this.onChangeLanguage('tr')}
                        />
                        <img
                            src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png"
                            alt="USA Flag"
                            style={{width: 36, height: 24, cursor: 'pointer'}}
                            onClick={() => this.onChangeLanguage('en')}
                        />
                    </div>
                </form>
            </div>
        );
    };
}

const UserSignupPageWithTranslation = withTranslation()(UserSignupPage);
export default UserSignupPageWithTranslation;
