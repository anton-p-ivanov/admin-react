import React from "react";
import Icon from "@app/common/Icon/Icon";

const getItems = items => {
    const disabled = items.filter(item => item._selected).length === 0;

    return [
        [
            {
                type: "link",
                route: "/users/add",
                title: "Add",
                attr: { className: "btn btn--primary" }
            }
        ],
        [
            {
                type: "link",
                route: "/users/delete",
                title: <Icon type="delete"/>,
                attr: {
                    className: "btn btn--default btn--icon" + (disabled ? " btn--disabled" : ""),
                    "data-disabled": disabled
                }
            },
            {
                type: "link",
                route: "/users",
                title: <Icon type="refresh"/>,
                attr: { className: "btn btn--default btn--icon" }
            }
        ]
    ]
};

export default getItems;