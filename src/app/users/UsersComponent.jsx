import React, { useEffect } from "react";
import DataTable from "@app/common/DataTable/DataTable";
import Pagination from "@app/common/Pagination/Pagination";
import Toolbar from "@app/common/Toolbar";
import Data from "@app/users/data";

const UsersComponent = ({ items, pagination, isFetching, match, getUsers, handleSelected }) => {
    // Loads users on component mount only
    useEffect(() => {
        getUsers(match.params.page || 1)
    }, []);

    let backdropClasses = ["list-view__backdrop"];
    if (isFetching) {
        backdropClasses.push(backdropClasses[0] + "--active");
    }

    return (
        <div className="list-view list-view--users">
            <div className="list-view__header">
                <h1>Users</h1>
            </div>
            <div className="list-view__content">
                <Toolbar items={ Data.UserToolbarItems(items) } counter={ pagination.total }/>
                <DataTable columns={ Data.UserTableSchema() } rows={ items } onSelect={ handleSelected }/>
                <Pagination { ...pagination } onClick={ getUsers }/>
            </div>
            <div className={ backdropClasses.join(" ") }/>
        </div>
    )
};


export default UsersComponent;