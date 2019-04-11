import React from "react";
import Icon from "@app/common/Icon/Icon";

const DropDownToggle = ({ children, active }) => {
    let classNames = ["dropdown__toggle"];
    if (children.type === Icon) {
        classNames.push("dropdown__toggle--icon");
    }
    if (active) {
        classNames.push("dropdown__toggle--active");
    }

    return (<div className={ classNames.join(" ") }>{ children }</div>)
};

export default DropDownToggle;
