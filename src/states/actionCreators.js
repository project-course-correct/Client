import * as types from './actionTypes';
import axios from "axios";

export const getPrisons = () => dispatch => {
    dispatch(spinnerOn());
    axios.get("http://demo4752238.mockable.io/prisons")
        .then(res => {
            dispatch({ type: types.GET_PRISONS, payload: res.data.prisons });
        })
        .catch(err => {
            dispatch({ type: types.ERROR, payload: err });
        })
        .finally(dispatch(spinnerOff()));
}

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

export function logIn(id) {
    return {
        type: types.LOGIN,
        payload: id,
    }
}

export function selectPrisonerId(id) {
    return {
        type: types.SELECT_PRISONER_ID,
        payload: id,
    }
}