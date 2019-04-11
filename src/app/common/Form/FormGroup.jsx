import React from "react";
import Input from "@app/common/Input";
import FormLabel from "@app/common/Form/FormLabel";
import FormHint from "@app/common/Form/FormHint";

const FormGroup = (props) => {
    const {
        type = "text",
        name = null,
        required = false,
        inputAttributes = {},
        label,
        hint,
        children } = props;

    return (
        <div className="form__group">
            { label ? <FormLabel required={ required } label={ label }/> : null }
            <div className="form__control">
                { children ? children : <Input type={ type } name={ name } required={ required } { ...inputAttributes }/> }
                { hint ? <FormHint hint={ hint }/> : null }
            </div>
        </div>
    );
};

export default FormGroup;