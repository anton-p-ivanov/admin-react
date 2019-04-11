import React from "react";
import headers from "./DataColumns/headers";

const DataHeader = props => {
    if (headers.hasOwnProperty(props.type)) {
        return headers[props.type](props);
    }

    return (
        <th className="data-table__item data-table__item--head" { ...props }>{ props.title }</th>
    );
};

export default DataHeader;