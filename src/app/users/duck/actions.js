import types from "./types";
import API from "@app/../api";

export const getUsers = (page = 1) => {
    return async dispatch => {
        dispatch(getUsersRequest());

        try {
            const response = await API.get(`/users/${page}`);
            dispatch(getUsersSuccess(response));

        }
        catch (error) {
            dispatch(getUsersFailure(error.message))
        }
    };
};

export const getUser = uuid => {
    return async dispatch => {
        dispatch(getUserRequest());

        try {
            const response = await API.get(`/users/${uuid}`);
            dispatch(getUserSuccess(response));

        }
        catch (error) {
            dispatch(getUserFailure(error.message))
        }
    };
};

export const changeUser = event => {
    return (dispatch, getState) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const attributes = {...getState().UsersState.ItemState.attributes};

        attributes[name] = value;

        dispatch(getUserChange(attributes));
    }
};

export const handleSelected = event => {
    return (dispatch, getState) => {
        const { value, checked } = event.target;
        const items = [].concat(getState().UsersState.ListState.items);

        if (value === "all") {
            const selected = items.filter(item => item._selected).length;
            items.map(item => item._selected = (selected === 0 || selected < items.length));
        }
        else {
            const row = items.find(item => item.uuid === value);
            if (row) {
                row._selected = !!checked;
            }
        }

        dispatch(getUsersSelected(items));
    }
};

const getUsersRequest = () => ({
    type: types.GET_DATA_REQUEST
});

const getUsersSuccess = payload => ({
    type: types.GET_DATA_SUCCESS,
    payload: payload
});

const getUsersFailure = error => ({
    type: types.GET_DATA_FAILURE,
    payload: error
});

const getUserRequest = () => ({
    type: types.GET_ITEM_REQUEST
});

const getUserSuccess = payload => ({
    type: types.GET_ITEM_SUCCESS,
    payload: payload
});

const getUserFailure = error => ({
    type: types.GET_ITEM_FAILURE,
    payload: error
});

const getUserChange = attributes => ({
    type: types.CHANGE_ITEM,
    attributes: attributes
});

const getUsersSelected = items => ({
    type: types.DATA_SELECT,
    payload: items
});