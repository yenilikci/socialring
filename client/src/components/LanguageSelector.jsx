import React from 'react';
import {changeLanguage} from "../api/apiCalls";
import {withTranslation} from "react-i18next";

const LanguageSelector = (props) => {

    const onChangeLanguage  = language => {
        const {i18n} = props;
        i18n.changeLanguage(language);
        changeLanguage(language);
    };

    return(
            <div className="container">
                <img
                    src="https://www.countryflags.com/wp-content/uploads/turkey-flag-png-large.png"
                    alt="Turkish Flag"
                    style={{width: 36, height: 24, marginRight: 5, cursor: 'pointer'}}
                    onClick={() => onChangeLanguage('tr')}
                />
                <img
                    src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png"
                    alt="USA Flag"
                    style={{width: 36, height: 24, cursor: 'pointer'}}
                    onClick={() => onChangeLanguage('en')}
                />
            </div>
    );
};

export default withTranslation()(LanguageSelector);
