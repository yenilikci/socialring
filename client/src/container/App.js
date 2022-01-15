import React from "react";
import ApiProgress from "../shared/ApiProgress";
import LoginPage from "../pages/LoginPage";
import LanguageSelector from "../components/LanguageSelector";
import UserSignupPage from "../pages/UserSignupPage";

function App() {
    return (
        <div className="row">
            <div className="col">
                    <UserSignupPage/>
            </div>
            <div className="col">
                    <LoginPage/>
            </div>
            <LanguageSelector/>

        </div>
    );
}

export default App;

