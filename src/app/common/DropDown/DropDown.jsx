import "@assets/common/DropDown.scss";

import React from "react";
import onClickOutside from "react-onclickoutside";
import DropDownToggle from "./DropDownToggle";
import DropDownMenu from "./DropDownMenu";

class DropDown extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false };
    }

    // noinspection JSUnusedGlobalSymbols
    handleClickOutside() {
        this.setState({ isOpen: false });
    }

    render() {
        const { items, toggle, attr } = this.props;
        const isOpen = this.state.isOpen;
        const toggleIsOpen = () => this.setState({ isOpen: !isOpen });

        return (
            <div className="dropdown" onClick={ toggleIsOpen }>
                <DropDownToggle active={ isOpen }>{ toggle }</DropDownToggle>
                <DropDownMenu items={ items } active={ isOpen } {...attr.menu}/>
            </div>
        );
    }
}

export default onClickOutside(DropDown);
