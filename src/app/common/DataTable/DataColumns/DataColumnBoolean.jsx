import React from "react";

/**
 * Renders column header.
 *
 * @param {Object} column
 *
 * @returns {string}
 * @constructor
 */
const DataColumnHeader = (column) => {
    const classNames = [
        "data-table__item",
        "data-table__item--head",
        "data-table__item--boolean",
    ];

    return (
        <th key={ `head-${ column.field }` } className={ classNames.join(" ") }>{ column.title }</th>
    );
};

/**
 * Render column data.
 *
 * @param {Object} props
 *
 * @returns {string}
 * @constructor
 */
const DataColumn = props => {
    let { className, children } = props;
    const classNames = ["data-table__item--boolean"].concat(className.split(" ")).reverse();

    if (typeof children === "boolean") {
        children = children ? "Yes" : "No";
    }

    return (
        <td className={ classNames.join(" ") }>
            { children }
        </td>
    );
};

export { DataColumn, DataColumnHeader };