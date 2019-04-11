import "@assets/common/Buttons.scss";

import React from "react";
import { Link } from "react-router-dom";

const onClick = event => {
    let target = event.target;

    if (!target.classList.contains("btn")) {
        target = target.closest(".btn");
    }

    if (target && target.dataset.disabled) {
        event.preventDefault();
        event.stopPropagation();
    }
};

const ButtonLink = ({route, attr, children}) => (
    <Link to={ route } { ...attr } onClick={ event => onClick(event) }>{ children }</Link>
);

export default ButtonLink;
