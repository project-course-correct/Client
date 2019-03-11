import * as types from '../actions/actionTypes';

export function authedReducers(state = false, action) {
    switch (action.type) {
        case types.LOGIN:
            return true;
        case types.LOGOUT:
            return false;
        default:
            return state;
    }
}
