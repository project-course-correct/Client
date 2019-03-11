import * as types from '../actions/actionTypes';

export function errorReducers(state = null, action) {
    switch (action.type) {
        case types.ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}