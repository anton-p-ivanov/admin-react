import "@assets/common/Checkbox.scss";

import React from "react";
import Input from "@app/common/Input";

const InputCheckbox = props => (
    <div className="checkbox">
        <label className="checkbox__label">
            <Input type="checkbox" className="checkbox__input" { ...props }/>
        </label>
    </div>
);

export default InputCheckbox;