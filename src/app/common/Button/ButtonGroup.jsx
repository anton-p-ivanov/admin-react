import "@assets/common/Buttons.scss";

import React from "react";
import uuid from "uuid/v4";

import Button from "@app/common/Button/Button";

const ButtonGroup = ({ items }) => (
    <div className="btn-group" key={ uuid() }>
        { items.map(_item => (
            <div className="btn-group__item" key={ uuid() }>
                <Button { ..._item }/>
            </div>
        )) }
    </div>
);

export default ButtonGroup;
