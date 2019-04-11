import React from "react";
import uuid from "uuid/v4";
import types from "@app/common/DataTable/DataColumns";

/**
 * Renders row`s column.
 *
 * @param {Object} row
 * @param {function} onSelect
 * @param {Object} column
 *
 * @returns {string}
 */
const renderColumn = (row, onSelect, column) => {
    const TagName = types[column.type] || types["text"];

    column.data = row;

    if (column.type === "selector") {
        column = {
            ...column,
            onSelect: onSelect,
            selected: !!row._selected
        }
    }

    return (
        <TagName className="data-table__item" key={ uuid() } { ...column }>
            { row[column.field] }
        </TagName>
    );
};

/**
 * Renders component.
 *
 * @param {Array} columns
 * @param {Object} row
 * @param {function} onSelect
 *
 * @returns {string}
 * @constructor
 */
const DataRow = ({ columns, row, onSelect }) => {
    let classNames = ["data-table__row"];
    if (row._selected) {
        classNames.push("data-table__row--selected");
    }
    return (
        <tr className={ classNames.join(" ") }>{ columns.map(renderColumn.bind(null, row, onSelect)) }</tr>
    );
};

export default DataRow;