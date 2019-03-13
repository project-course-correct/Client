import * as types from './actionTypes';
import axios from "axios";

export const getPrisons = () => dispatch => {
    dispatch(spinnerOn());
    axios.get("http://localhost:5000/api/prisons/")
        .then(res => {
            dispatch({ type: types.GET_PRISONS, payload: res.data });
            dispatch(spinnerOff());
        })
        .catch(err => {
            dispatch({ type: types.ERROR, payload: err.message });
            console.log(err.message);
        })
}

export const getPrisonersByPrisonId = id => dispatch => {
    dispatch(spinnerOn());
    axios.get(`http://localhost:5000/api/prisons/${id}/prisoners`)
        .then(res => {
            dispatch({ type: types.GET_PRISONERS_BY_PRISON_ID, payload: res.data });
            dispatch(spinnerOff());
        })
        .catch(err => {
            dispatch({ type: types.ERROR, payload: err.message });
            console.log(err.message);
        })
}

export const addPrisoner = (prisoner, id) => dispatch => {
    dispatch(spinnerOn());
    axios.post(`http://demo4752238.mockable.io/prisons/${id}`, prisoner)
        .then(res => {
            dispatch({ type: types.ADD_PRISONER, payload: res.data.prisons });
        })
    return {
        type: types.ADD_PRISONER,
        payload: prisoner,
    }
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

