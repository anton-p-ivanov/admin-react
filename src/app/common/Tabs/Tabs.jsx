/* Import styles */
import "@assets/common/Tabs.scss";

/* Import framework */
import React from "react";

/* Import custom components */
import TabsPane from "@app/common/Tabs/TabsPane";
import TabsLink from "@app/common/Tabs/TabsLink";

/**
 * Renders a navigation tabs.
 *
 * @param {Array} children
 * @returns {string}
 */
const renderNav = children => {
    return (
        <div className="tabs-nav">
            { children.filter(child => child.type === TabsPane).map((child, index) => (
                <TabsLink key={ index } route={ child.props.route } label={ child.props.label }/>
            )) }
        </div>
    );
};

const collectPanes = (children, result = []) => {
    children.forEach(child => {
        if (child.type === TabsPane) {
            result.push(child);
            return;
        }

        let object = child.props.children;

        if (typeof child.props.component === "function") {
            let component = child.props.component();
            if (React.isValidElement(component)) {
                object = component.props.children;
            }
        }

        if (object && typeof object === "object") {
            if (React.isValidElement(object)) {
                object = [object];
            }

            collectPanes(object, result);
        }
    });

    return result;
};

/**
 * Renders component.
 *
 * @param {Array} children
 *
 * @returns {string}
 * @constructor
 */
const Tabs = ({ children }) => {
    const panes = collectPanes([children]);
    return (
        <div className="tabs">
            <div className="tabs__nav">{ renderNav(panes) }</div>
            <div className="tabs__content">
                { children }
            </div>
        </div>
    );
};

export default Tabs;