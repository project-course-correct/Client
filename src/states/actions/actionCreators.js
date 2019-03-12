import * as types from './actionTypes';
import axios from "axios";

export const getPrisons = () => async dispatch => {
    dispatch(spinnerOn());
    try {
        const res = await axios.get(`http://demo4752238.mockable.io/prisons/`);
        dispatch({ type: types.GET_PRISONS, payload: res.data.prisons });
    }
    catch(err) {
        dispatch({ type: types.ERROR, payload: err });
    }
    finally {
        dispatch(spinnerOff());
    };
};

export const fetchPrisoners = () => async dispatch => {
    dispatch(spinnerOn());
    try {
        const res = await axios.get(`http://demo4752238.mockable.io/prisons/prisoners`);
        dispatch({ type: types.FETCH_PRISONERS, payload: res.data.results });
    }
    catch(err) {
        dispatch({ type: types.ERROR, payload: err });
    }
    finally {
        dispatch(spinnerOff());
    }
}

export const addPrisoner = () => dispatch => {
    dispatch({ type: types.ADD_PRISONER })
    axios
        .post(`http://demo4752238.mockable.io/prisons/prisoners`)
        .then(res => {
            console.log(res.data);
            dispatch({ type: types.ADD_SUCCESS, payload: res.data.results });
        })
        .catch(err => dispatch({ type: types.ERROR, payload: err }));
};

// export const getPrisons = () => dispatch => {
//     dispatch(spinnerOn());
//     axios.get("http://demo4752238.mockable.io/prisons")
//         .then(res => {
//             dispatch({ type: types.GET_PRISONS, payload: res.data.prisons });
//         })
//         .catch(err => {
//             dispatch({ type: types.ERROR, payload: err });
//         })
//         .finally(dispatch(spinnerOff()));
// }

export function spinnerOn() {
    return {
        type: types.SPINNER_ON,
    };
}

export function spinnerOff() {
    return {
        type: types.SPINNER_OFF,
    };
}

export function logOut() {
    return {
        type: types.LOGOUT,
    }
}