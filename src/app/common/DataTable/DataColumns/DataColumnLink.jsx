import React from "react";
import { Link } from "react-router-dom";

/**
 * Renders component.
 *
 * @param {Object} props
 *
 * @returns {string}
 * @constructor
 */
const DataColumn = props => {
    let { route, data } = props;

    route = route.replace(/(:\w+)/, found => {
        if (data.hasOwnProperty(found.slice(1))) {
            return data[found.slice(1)];
        }
        return found;
    });

    return (
        <td { ...props }><Link to={ route }>{ props.children }</Link></td>
    );
};

export { DataColumn };