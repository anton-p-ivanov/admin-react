import "@assets/common/Buttons.scss";

import React from "react";

const ButtonButton = props => (
    <button type="button" className="btn btn--default" { ...props.attr }>
        { props.children }
    </button>
);

export default ButtonButton;
