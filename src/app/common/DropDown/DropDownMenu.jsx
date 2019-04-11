import React from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v4";

/**
 * Renders menu item.
 *
 * @param {Object} item
 * @returns {string}
 */
const renderMenuItem = item => {
    const { type = "link", route = "#", title } = item;

    let content = (<Link key={ uuid() } to={ route } className="dropdown__item dropdown__item--link">{ title }</Link>);
    if (type === "divider") {
        content = (<span key={ uuid() } className="dropdown__item dropdown__item--divider"/>);
    }

    return content;
};

/**
 * Collect class names.
 *
 * @param {string|[]} className
 * @param {boolean} active
 * @returns {string}
 */
const getClassName = (className, active) => {
    className = className.split(" ");
    if (active) {
        className.push("dropdown__menu--active");
    }
    return className.join(" ");
};

/**
 * Renders component.
 *
 * @param {string} className
 * @param {[]} items
 * @param {boolean} active
 * @returns {string}
 * @constructor
 */
const DropDownMenu = ({ className = "dropdown__menu", items, active }) => (
    <div className={ getClassName(className, active) }>
        { items.map(item => renderMenuItem(item)) }
    </div>
);

export default DropDownMenu;
