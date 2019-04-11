import "@assets/common/Buttons.scss";

import React from "react";
import ButtonButton from "@app/common/Button/ButtonButton";
import ButtonSubmit from "@app/common/Button/ButtonSubmit";
import ButtonLink from "@app/common/Button/ButtonLink";

const types = {
    "button": ButtonButton,
    "submit": ButtonSubmit,
    "link": ButtonLink
};

const Button = props => {
    const { type = "button", route, attr, title, children } = props;
    const TagName = types[type] || types["button"];

    return (
        <TagName className="btn btn--default" route={ route } attr={ attr }>{ title || children }</TagName>
    )
};

export default Button;
