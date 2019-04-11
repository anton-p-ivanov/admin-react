import { combineReducers } from "redux";
import UsersReducer from "./app/users/duck/reducers";

const AppReducer = combineReducers({
    UsersState: UsersReducer
});

export default AppReducer;