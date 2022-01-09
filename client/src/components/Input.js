import React from 'react';

const Input = (props) => {
    const {label, error, name, onChange, type} = props;
    const className = error ? "form-control is-invalid" : "form-control";
    return (
        <div className="form-group mt-4">
            <label>{label}</label>
            <input type="text"
                   className={className}
                   name={name}
                   onChange={onChange}
                   type={type}
            />
            <div className="invalid-feedback">
                {error}
            </div>
        </div>
    )
};

export default Input;
