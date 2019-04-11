import React from "react";
import InputCheckbox from "@app/common/InputCheckbox";

const DataColumnHeader = ({ onSelect, selected }) => (
    <th className="data-table__item data-table__item--head">
        <InputCheckbox value="all" checked={ selected } onChange={ event => onSelect(event) }/>
    </th>
);

const DataColumn = ({ onSelect, selected, children }) => (
    <td className="data-table__item">
        <InputCheckbox value={ children } checked={ selected } onChange={ event => onSelect(event) }/>
    </td>
);

export {
    DataColumn,
    DataColumnHeader
}