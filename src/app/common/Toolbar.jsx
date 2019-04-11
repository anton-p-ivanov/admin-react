import "@assets/common/Toolbar.scss";
import "@assets/common/Form.scss";

import React from "react";
import ButtonGroup from "./Button/ButtonGroup";
import uuid from "uuid/v4";
import Icon from "@app/common/Icon/Icon";

const Toolbar = ({ items, counter = 0 }) => (
    <div className="toolbar">
        <div className="toolbar__pane">
            { items.map(group => (
                <ButtonGroup items={ group } key={ uuid() }/>
            )) }
        </div>
        <div className="toolbar__pane toolbar__pane--search">
            <div className="search">
                <div className="search__counter">
                    Total found: { counter }
                </div>
                <div className="search__form">
                    <form className="form">
                        <div className="input-group">
                            <div className="input-group__item">
                                <input type="text" className="form__input form__input--default" placeholder="Search ..." style={{marginBottom: 0}}/>
                            </div>
                            <div className="input-group__item">
                                <button className="btn btn--default btn--icon">
                                    <Icon type="search"/>
                                </button>
                            </div>
                            <div className="input-group__item">
                                <button className="btn btn--default btn--icon">
                                    <Icon type="filter"/>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default Toolbar;
