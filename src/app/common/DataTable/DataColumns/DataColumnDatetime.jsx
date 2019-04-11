import React from "react";

/**
 * DataColumnDatetime component
 */
const DataColumnDatetime = props => {
    let { children } = props;

    if (children && children.hasOwnProperty("date")) {
        // Formatting date values in client is slow
        // date = moment(children.date).format("L LT");
        children = children.date;
    }

    return (
        <td className="data-table__item">{ typeof children !== "undefined" ? children : (<em>Not available</em>) }</td>
    );
};

export default DataColumnDatetime;