import * as types from '../actions/actionTypes';

const initState = {
    prisoners: [],
    fetching: false,
    editing: false,
    deleting: false,
    error: null
}

export function prisonersReducers(state = initState, action) {
    switch (action.type) {
        case types.FETCH_PRISONERS:
            return {
                ...state,
                fetching: true
            }
        case types.FETCH_SUCCESS:
            return {
                ...state,
                prisoners: [
                    ...action.payload
                ],
                fetching: false
            }
        case types.FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetching: false
            }
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