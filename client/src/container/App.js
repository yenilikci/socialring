import React from "react";
import ApiProgress from "../shared/ApiProgress";
import LoginPage from "../pages/LoginPage";
import LanguageSelector from "../components/LanguageSelector";
import UserSignupPage from "../pages/UserSignupPage";
import HomePage from "../pages/HomePage";

function App() {
    return (
        <div className="row">
            <HomePage/>
            <LanguageSelector/>
        </div>
    );
}

export default App;

