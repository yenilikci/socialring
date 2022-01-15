import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap-override.scss';
import UserSignupPage from "./pages/UserSignupPage";
import LoginPage from "./pages/LoginPage";
import reportWebVitals from './reportWebVitals';
import './i18n';
import LanguageSelector from "./components/LanguageSelector";
import ApiProgress from "./shared/ApiProgress";
import App from "./container/App";

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
