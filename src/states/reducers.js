import * as types from './actionTypes';

export function prisons(state = [], action) {
    switch (action.type) {
        case types.GET_PRISONS:
            return action.payload;
        case types.ADD_PRISONER:
            return //todo;
        case types.DELETE_PRISONER:
            return //todo;
        case types.EDIT_PRISONER:
            return //todo;
        default:
            return state;
    }
}

export function loading(state = false, action) {
    switch (action.type) {
        case types.SPINNER_OFF:
            return false;
        case types.SPINNER_ON:
            return true;
        default:
            return state;
    }
}

export function error(state = null, action) {
    switch (action.type) {
        case types.ERROR:
            return action.payload;
        default:
            return state;
    }
}

export function authed(state = false, action) {
    switch (action.type) {
        case types.LOGIN:
            return true;
        case types.LOGOUT:
            return false;
        default:
            return state;
    }
}
