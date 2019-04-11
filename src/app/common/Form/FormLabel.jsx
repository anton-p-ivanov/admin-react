import React from "react";

const FormLabel = ({ label, required }) => (
    <label className={ `form__label` + (required ? ` form__label--required` : ``) }>{ label }</label>
);

export default FormLabel;