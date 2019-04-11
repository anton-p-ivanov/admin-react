import "@assets/common/Buttons.scss";

import React from "react";

const ButtonSubmit = props => (
    <button type="submit" className="btn btn--default" { ...props.attr }>
        { props.children }
    </button>
);

export default ButtonSubmit;
