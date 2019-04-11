import React from "react";
import InputToggle from "@app/common/InputToggle";
import InputDefault from "@app/common/InputDefault";

const types = {
    default: InputDefault,
    toggle: InputToggle
};

const Input = props => {
    const type = props.type || "text",
          TagName = types.hasOwnProperty(type) ? types[type] : types.default;

    return (
        <TagName { ...props } />
    );
};

export default Input;