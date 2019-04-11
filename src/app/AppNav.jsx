import "../../assets/scss/AppNav.scss";

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Uuid from "uuid/v4";
import AppNavItems from "./data/AppNav";

const AppNav = () => {
    let [items, setItems] = useState([]);

    useEffect(() => {
        setItems(AppNavItems);
    });

    return (
        <div className="app-nav">
            { items.map(group => (
                <div key={ Uuid() } className="app-nav__group">
                    { group.map(item => (
                        <NavLink key={ Uuid() } to={ item.route }
                                 activeClassName="app-nav__item--active"
                                 className="app-nav__item">
                            { item.title }
                        </NavLink>
                    )) }
                </div>
            )) }
        </div>
    );
};

export default AppNav;