import UserTableContextMenu from "./UserTableContextMenu";

const UserTableSchema = () => ([
    { title: 'ID', field: 'uuid', type: 'selector', width: 45 },
    { title: 'Name', field: 'fullName', type: 'link', route: '/users/:uuid/edit' },
    { title: 'E-Mail', field: 'email', type: 'email' },
    { title: 'Active', field: 'isActive', type: 'boolean', width: 100 },
    { title: 'Confirmed', field: 'isConfirmed', type: 'boolean', width: 100 },
    { title: 'Last login', field: 'lastLogin', type: 'datetime', width: 160 },
    { title: 'Modified at', field: 'modifiedAt', type: 'datetime', width: 160 },
    { title: 'Actions', field: 'uuid', type: 'action', width: 45, items: UserTableContextMenu },
]);

export default UserTableSchema;