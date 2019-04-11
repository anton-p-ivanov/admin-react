import React from "react";

const TabsPane = ({label,children}) => (
    <div className={`tabs__pane`}>
        { children || label }
    </div>
);

export default TabsPane;