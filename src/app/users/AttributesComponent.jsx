import React from "react";
import { Grid, GridColumn, GridRow } from "@app/common/Grid";
import FormGroup from "@app/common/Form/FormGroup";

const fields = [
    {
        type: "email",
        name: "email",
        required: true,
        inputAttributes: { placeholder: "john.smith@email.com" },
        label: "E-Mail",
        hint: "Valid E-Mail required for user authorization",
    },
    {
        required: true,
        name: "fname",
        label: "First name",
        inputAttributes: { placeholder: "John" }
    },
    {
        required: true,
        name: "lname",
        label: "Last name",
        inputAttributes: { placeholder: "Smith" }
    }
];

const AttributesComponent = props => {
    const {attributes, onChange} = props;

    return (
        <div className="tabs__pane">
            <Grid>
                <GridRow>
                    <GridColumn size={ 3 }>
                        { fields.map(field => {
                            field.inputAttributes.defaultValue = attributes[field.name];
                            field.inputAttributes.onChange = event => onChange(event);

                            return (
                                <FormGroup key={field.name} {...field}/>
                            );
                        })}
                    </GridColumn>
                    <GridColumn>&nbsp;</GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
};

export default AttributesComponent;