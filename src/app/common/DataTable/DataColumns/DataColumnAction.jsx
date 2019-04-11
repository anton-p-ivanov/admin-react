import React from "react";
import Icon from "@app/common/Icon/Icon";
import DropDown from "@app/common/DropDown/DropDown";

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
        "data-table__item--head"
    ];

    return (
        <th key={ `head-${ column.field }` } className={ classNames.join(" ") }>&nbsp;</th>
    );
};

/**
 * Renders column data.
 *
 * @param {Object} props
 *
 * @returns {string}
 * @constructor
 */
const DataColumn = props => (
    <td className="data-table__item data-table__item--dropdown">
        <DropDown toggle={ <Icon type="more"/> }
                  items={ DropDownItems(props) }
                  attr={ DropDownAttributes }/>
    </td>
);

/**
 * Prepare action menu items to be rendered.
 *
 * @returns {[]}
 */
const DropDownItems = props => {
    const { items = [], data = {} } = props;

    return items.map(item => {
        if (item.route) {
            item.route = item.route.replace(/(:\w+)/, found => {
                if (data.hasOwnProperty(found.slice(1))) {
                    return data[found.slice(1)];
                }
                return found;
            });
        }

        return item;
    });
};

/**
 * DropDown menu attributes.
 */
const DropDownAttributes = {
    menu: {
        className: "dropdown__menu dropdown__menu--right"
    }
};

export { DataColumn, DataColumnHeader }