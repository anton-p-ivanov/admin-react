import "@assets/common/Icon.scss";

import React from 'react';
import Menu from "./Svg/Menu.svg";
import More from "./Svg/More.svg";
import Backward from "./Svg/Backward.svg";
import Forward from "./Svg/Forward.svg";
import Delete from "./Svg/Delete.svg";
import Refresh from "./Svg/Refresh.svg";
import Search from "./Svg/Search.svg";
import Filter from "./Svg/Filter.svg";

export default class Icon extends React.Component {

    constructor(props) {
        super(props);

        this.icons = {
            menu: Menu,
            more: More,
            backward: Backward,
            forward: Forward,
            delete: Delete,
            refresh: Refresh,
            search: Search,
            filter: Filter
        };
    }

    render() {
        const TagName = this.icons[this.props.type];

        return (
            <div className="icon">
                <TagName/>
            </div>
        );
    }
}