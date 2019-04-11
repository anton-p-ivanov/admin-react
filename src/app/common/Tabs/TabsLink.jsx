import React from "react";
import { NavLink } from "react-router-dom";

const TabsLink = ({ route, label, onClick }) => (
    <NavLink exact to={ route } onClick={onClick} className="tabs-nav__item" activeClassName="tabs-nav__item--active">
        { label }
    </NavLink>
);

export default TabsLink;