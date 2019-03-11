import * as types from '../actions/actionTypes';

export function loadingReducers(state = false, action) {
    switch (action.type) {
        case types.SPINNER_OFF:
            return false;
        case types.SPINNER_ON:
            return true;
        default:
            return state;
    }
}
