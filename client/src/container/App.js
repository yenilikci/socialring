import React from "react";
import ApiProgress from "../shared/ApiProgress";
import LoginPage from "../pages/LoginPage";
import LanguageSelector from "../components/LanguageSelector";
import UserSignupPage from "../pages/UserSignupPage";
import HomePage from "../pages/HomePage";
import {HashRouter, Route, Redirect, Switch} from "react-router-dom";
import UserPage from "../pages/UserPage";

function App() {
    return (
        <div>
            <HashRouter>
               <Switch>
                   <Route path="/" exact component={HomePage}/>
                   <Route path="/login" component={LoginPage}/>
                   <Route path="/signup" component={UserSignupPage}/>
                   <Route path="/user/:username" component={UserPage}/>
                   <Redirect to="/"/>
               </Switch>
            </HashRouter>
            <LanguageSelector/>
        </div>
    );
}

export default App;

