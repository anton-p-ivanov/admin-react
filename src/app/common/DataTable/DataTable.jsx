import "@assets/common/DataTable.scss";

import React from "react";
import uuid from "uuid/v4";
import DataRow from "./DataRow";
import DataHeader from "./DataHeader";

/**
 * Renders colgroup column.
 *
 * @param {Object} column
 * @param {string} column.field
 * @param {number} column.width
 * @param {number} index
 *
 * @returns {string}
 */
const renderCol = (column, index) => (
    <col key={ `col-${ column.field }-${ index }` } width={ column.width }/>
);

/**
 * Render table header cell.
 *
 * @param {function} onSelect
 * @param {boolean} selected
 * @param {Object} column
 * @param {string} column.field
 * @param {number} column.title
 * @param {string} column.type
 * @param {number} index
 *
 * @returns {string}
 */
const renderHeader = (onSelect, selected, column, index) => {
    let attr = { ...column};
    if (column.type === "selector") {
        attr = {
            ...attr,
            selected: selected,
            onSelect: onSelect
        }
    }

    return (
        <DataHeader key={ `head-${ column.field }-${ index }` } { ...attr }/>
    );
};

/**
 * Renders single row.
 *
 * @param {Object} columns
 * @param {function} onSelect
 * @param {Object} row
 * @param {string} row.uuid
 *
 * @returns {string}
 */
const renderRow = (columns, onSelect, row) => (
    <DataRow key={ uuid() } columns={ columns } row={ row } onSelect={ onSelect }/>
);

/**
 * Populate rows array with `empty` values.
 *
 * @param {Object} columns
 * @param {number} rowsCount
 *
 * @returns {[]}
 */
const empty = (columns, rowsCount = 10) => (
    Array(rowsCount).fill(null).map(() => {
        let row = {};

        columns.forEach(column => {
            row[column.field] = (<span className="data-table__placeholder"/>)
        });

        return row;
    })
);

/**
 * Renders component.
 *
 * @param {Array} columns
 * @param {Array} rows
 * @param {function} onSelect
 *
 * @returns {string}
 * @constructor
 */
const DataTable = ({ columns, rows, onSelect }) => (
    <table className="data-table">
        <colgroup>
            { columns.map(renderCol) }
        </colgroup>
        <thead className="data-table__head">
        <tr>{ columns.map(renderHeader.bind(null, onSelect, rows.length > 0 && rows.filter(row => row._selected).length === rows.length)) }</tr>
        </thead>
        <tbody className="data-table__body">
        { (rows || empty(columns)).map(renderRow.bind(null, columns, onSelect)) }
        </tbody>
    </table>
);

export default DataTable;