import React from "react";

const GridColumn = ({ size = 1, children }) => (
    <div className={`grid__column grid__column--${size}`}>{ children }</div>
);

export default GridColumn;