import types from "./types";

const INITIAL_STATE = {
    attributes: {}
};

const ItemReducer = function (state = INITIAL_STATE, action) {

    switch (action.type) {

        case types.GET_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
            };

        case types.GET_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                attributes: action.payload.data,
            };

        case types.GET_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case types.CHANGE_ITEM:
            return {
                ...state,
                attributes: action.attributes
            };

        default:
            return state;
    }

};

export default ItemReducer;