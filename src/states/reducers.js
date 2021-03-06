import * as types from './actionTypes';

export function prisons(state = [], action) {
    switch (action.type) {
        case types.GET_PRISONS:
            return action.payload;
        case types.SIGN_UP:
            return state.concat(action.payload);
        default:
            return state;
    }
}

export function prisoners(state = null, action) {
    switch (action.type) {
        case types.GET_PRISONERS_BY_PRISON_ID:
            return action.payload;
        case types.GET_PRISONERS:
            return action.payload;
        case types.CLEAR_PRISONERS:
            return null;
        case types.LOGOUT:
            return [];
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

export function authedPrison(state = null, action) {
    switch (action.type) {
        case types.LOGIN:
            return action.payload.prison;
        case types.LOGOUT:
            return null;
        default:
            return state;
    }
}

export function selectedPrisonerId(state = null, action) {
    switch (action.type) {
        case types.SELECT_PRISONER_ID:
            return action.payload;
        case types.DELETE_PRISONER:
            return "";
        case types.LOGOUT:
            return "";
        default:
            return state;
    }
}

export function skills(state = null, action) {
    switch (action.type) {
        case types.GET_PRISONER_SKILLS:
            return action.payload;
        default:
            return state;
    }
}


