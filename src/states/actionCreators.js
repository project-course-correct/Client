import * as types from './actionTypes';
import axios from "../axios/axios";

export const getPrisons = () => dispatch => {
    dispatch(spinnerOn());
    axios().get("https://course-correct-backend.herokuapp.com/api/prisons")
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
    axios().get(`https://course-correct-backend.herokuapp.com/api/prisons/${id}/prisoners`)
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
    axios().post("https://course-correct-backend.herokuapp.com/api/auth/register", newPrison)
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
    axios().post("https://course-correct-backend.herokuapp.com/api/auth/login", newLogin)
        .then(res => {
            dispatch({ type: types.LOGIN, payload: res.data })
            localStorage.setItem('token', res.data.token);
            dispatch(spinnerOff());
            console.log(res.data);
        })
        .catch(err => {
            dispatch({ type: types.ERROR, payload: err.message })
            console.log(err.message);
        })
}

export const deleteAccount = id => dispatch => {
    dispatch(spinnerOn());
    axios().delete(`https://course-correct-backend.herokuapp.com/api/prisons/${id}`)
        .then(res => {
            dispatch({ type: types.DELETE_ACCOUNT, payload: res.data })
            dispatch(spinnerOff());
        })
        .catch(err => {
            dispatch({ type: types.ERROR, payload: err.message })
            console.log(err.message);
        })
}

export const addPrisoner = prisoner => dispatch => {
    dispatch(spinnerOn());
    axios().post("https://course-correct-backend.herokuapp.com/api/prisoners", prisoner)
        .then(res => {
            dispatch({ type: types.ADD_PRISONER, payload: res.data });
            dispatch(spinnerOff());
        })
        .catch(err => {
            dispatch({ type: types.ERROR, payload: err.message })
            console.log(err);
        })
}

export const editPrisoner = (id, newPrisoner) => dispatch => {
    //to do
    dispatch(spinnerOn());
}

export const deletePrisoner = id => dispatch => {
    //to do
    dispatch(spinnerOn());
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

export function logIn(newLogin) {
    return {
        type: types.LOGIN,
        payload: newLogin,
    }
}

export function selectPrisonerId(id) {
    return {
        type: types.SELECT_PRISONER_ID,
        payload: id,
    }
}

