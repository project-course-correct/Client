import * as types from '../actions/actionTypes';

const initState = {
    prisons: [],
    getting: false,
    error: null
}

export function prisonsReducers(state = initState, action) {
    switch (action.type) {
        case types.GET_PRISONS:
            return {
                ...state,
                getting: true
            };
        case types.GET_SUCCESS:
            return {
                ...state,
                prisons: [ 
                    ...action.payload
                ],
                getting: false
            };
        default:
            return state;
    };
};