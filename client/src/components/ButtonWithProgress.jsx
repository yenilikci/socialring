import React from 'react';

const ButtonWithProgress = (props) => {

    const {onClick,pendingApiCall, disabled, text} = props;

    return (
        <button
            disabled={disabled}
            className="btn btn-primary mt-4"
            onClick={onClick}>
            {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>}
            {text}
        </button>
    );
};

export default ButtonWithProgress;
