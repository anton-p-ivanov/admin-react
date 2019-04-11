import React from "react";
import ButtonGroup from "@app/common/Button/ButtonGroup";
import uuid from "uuid/v4";

const defaultActions = [
    [
        { type: "submit", title: "Save", attr: {name: "submit", className: "btn btn--primary"} }
    ],
    [
        { title: "Apply", attr: {name: "apply" }},
        { title: "Cancel", attr: {name: "cancel" }}
    ]
];

const FormActions = ({ items = defaultActions }) => {
    return (
        <div className="form__actions">
            { items.map(group => (
                <ButtonGroup items={ group } key={ uuid() }/>
            )) }
        </div>
    );
};

export default FormActions;