import React, {useEffect} from "react";

const handleInput = (children, attributes, counter = 0) => {
    children.forEach(child => {
        if (child.type.name === "FormGroup"/* && attributes.hasOwnProperty(child.props.name)*/) {
            // child.value = "test";//attributes[child.props.name];
            // console.log(child);
            return;
        }

        let object = child.props.children;

        if (typeof child.props.component === "function") {
            let component = child.props.component();
            if (React.isValidElement(component)) {
                object = component.props.children;
            }
        }

        if (object && typeof object === "object") {
            if (React.isValidElement(object)) {
                object = [object];
            }

            handleInput(object, attributes, counter++);
        }
    });
};

const Form = ({ attributes = {}, action, method = "POST", className = "form", children }) => {
    // useEffect(() => {
    //     if (Object.keys(attributes).length > 0) {
    //         handleInput(children, attributes);
    //     }
    // });

    return (
        <form className={ className } action={ action } method={ method }>{ children }</form>
    );
};

export default Form;