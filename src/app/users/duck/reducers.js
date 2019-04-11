import { combineReducers } from "redux";
import ItemReducer from "@app/users/duck/ItemReducer";
import ListReducer from "@app/users/duck/ListReducer";

const UsersReducer = combineReducers({
    ListState: ListReducer,
    ItemState: ItemReducer,
});

export default UsersReducer;