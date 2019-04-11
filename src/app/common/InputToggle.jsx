import React from "react";

const handleChange = event => {
    const target = event.target;

    target.closest(".switch").classList.toggle("switch--checked", target.checked);
};

const InputToggle = props => {
    return (
        <div className={`form__input form__input--switch`}>
            <div className="switch">
                <div className={`switch__container`}>
                    <div className="switch__toggle"/>
                    <input type="hidden" name={ props.name } value={ props.value } />
                    <input type="checkbox" tabIndex={0} name={ props.name } value={ props.value } onChange={event => handleChange(event) } className="switch__input" />
                </div>
                <label className={`switch__label`}>
                    User is active
                </label>
            </div>
        </div>
    );
};

export default InputToggle;