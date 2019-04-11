import React from 'react';

/**
 * DataColumnEmail component
 */
const DataColumnEmail = props => (
    <td {...props}>
        <a href={ `mailto:` + props.children }>{ props.children }</a>
    </td>
);

export default DataColumnEmail;