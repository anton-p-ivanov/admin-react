import types from "./types";

const INITIAL_STATE = {
    items: [],
    pagination: {
        page: 1,
        size: 10,
        total: 10,
    }
};

const ListReducer = function (state = INITIAL_STATE, action) {

    switch (action.type) {

        case types.GET_DATA_REQUEST:
            return {
                ...state,
                isFetching: true,
            };

        case types.GET_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.payload.data,
                pagination: {
                    page: action.payload.headers["x-pagination-page"],
                    size: action.payload.headers["x-pagination-size"],
                    total: action.payload.headers["x-pagination-total"],
                }
            };

        case types.GET_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case types.DATA_SELECT:
            return {
                ...state,
                items: action.payload
            };

        default:
            return state;
    }

};

export default ListReducer;