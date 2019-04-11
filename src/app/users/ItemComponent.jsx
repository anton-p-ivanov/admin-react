import React, { useEffect } from "react";
import Form from "@app/common/Form/Form";
import FormActions from "@app/common/Form/FormActions";
import Tabs from "@app/common/Tabs/Tabs";
import TabsPane from "@app/common/Tabs/TabsPane";
import { HashRouter, Route, Switch } from "react-router-dom";
import AttributesComponent from "@app/users/AttributesComponent";

const titles = {
    edit: "Edit user attributes",
    copy: "Copy user attributes",
    delete: "Delete user"
};

const ItemComponent = ({ attributes, isFetching, match, getUser, changeUser }) => {
    // Loads user attributes on component mount only
    useEffect(() => {
        getUser(match.params.uuid)
    }, []);

    return (
        <div className="item-view item-view--users">
            <div className="item-view__header">
                <h1>{ titles[match.params.action || "edit"]}</h1>
            </div>
            <div className="item-view__content">
                <Form attributes={attributes}>
                    <Tabs>
                        <HashRouter>
                            <Switch>
                                <Route path={`${match.path}`} exact>
                                    {/*<AttributesComponent attributes={attributes} onChange={changeUser}/>*/}
                                    <TabsPane route={`${match.url}`} label="Attributes"/>
                                </Route>
                                <Route path={`${match.path}/roles`}>
                                    <TabsPane route={`${match.url}/roles`} label="Roles & Permissions"/>
                                </Route>
                                <Route path={`${match.path}/misc`}>
                                    <TabsPane route={`${match.url}/misc`} label="Misc"/>
                                </Route>
                            </Switch>
                        </HashRouter>
                    </Tabs>
                    <FormActions/>
                </Form>
            </div>
        </div>
    )
};

export default ItemComponent;