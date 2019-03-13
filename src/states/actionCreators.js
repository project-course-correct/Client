import * as types from './actionTypes';
import axios from "axios";

export const getPrisons = () => dispatch => {
    dispatch(spinnerOn());
    axios.get("https://course-correct-backend.herokuapp.com/api/prisons")
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
    axios.get(`https://course-correct-backend.herokuapp.com/api/prisons/${id}/prisoners`)
        .then(res => {
            dispatch({ type: types.GET_PRISONERS_BY_PRISON_ID, payload: res.data });
            dispatch(spinnerOff());
        })
        .catch(err => {
            dispatch({ type: types.ERROR, payload: err.message });
            console.log(err.message);
        })
}

export const signUp = newPrison => dispatch => {
    dispatch(spinnerOn());
    axios.post("https://course-correct-backend.herokuapp.com/api/auth/register", newPrison)
        .then(res => {
            dispatch({ type: types.SIGN_UP, payload: res.data });
            dispatch(spinnerOff());
        })
        .catch(err => {
            dispatch({ type: types.ERROR, payload: err.message })
            console.log(err.message);
        })
}

export const login = newLogin => dispatch => {
    dispatch(spinnerOn());
    axios.post("https://course-correct-backend.herokuapp.com/api/auth/login", newLogin)
        .then(res => {
            dispatch({ type: types.LOGIN, payload: res.data })
            dispatch(spinnerOff());
            console.log(res.data);
        })
        .catch(err => {
            dispatch({ type: types.ERROR, payload: err.message })
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

