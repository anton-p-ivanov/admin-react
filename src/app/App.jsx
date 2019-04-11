import "../../assets/scss/App.scss";

import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom"

import User from "./users/ItemContainer";
import Users from "./users/UsersContainer";
import AppNav from "./AppNav";

const App = () => (
    <HashRouter>
        <div className="page">
            <div className="page__header">

            </div>
            <div className="page__content">
                <div className="content">
                    <div className="content__nav">
                        <AppNav/>
                    </div>
                    <div className="content__main">
                        <Switch>
                            <Route path="/" exact component={ () => <div>Home Page</div> }/>
                            <Route path="/users" exact component={ Users }/>
                            <Route path="/users/:page(\d+)" component={ Users }/>
                            <Route path="/users/add" exact component={ () => <div>New user</div> }/>
                            <Route path="/users/:uuid([\w\-]{36})/:action(edit|copy|delete)" component={ User }/>
                        </Switch>
                    </div>
                </div>
            </div>
            <div className="page__footer">
                © { (new Date()).getFullYear() }, All rights reserved.
            </div>
        </div>
    </HashRouter>
);

export default App;