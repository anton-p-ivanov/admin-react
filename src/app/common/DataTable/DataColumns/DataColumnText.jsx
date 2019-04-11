import React from 'react';

/**
 * Renders component.
 *
 * @param {Object} props
 *
 * @returns {string}
 * @constructor
 */
const DataColumnText = props => (
    <td { ...props }>{ props.children }</td>
);

export default DataColumnText;