import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

import * as reducers from './states/reducers';
import './index.css';
import App from './App';

const rootReducer = combineReducers({
    prisons: reducers.prisons,
    loading: reducers.loading,
    error: reducers.error,
    selectedPrisonerId: reducers.selectedPrisonerId,
    prisoners: reducers.prisoners,
    authedPrison: reducers.authedPrison,
    skills: reducers.skills,
  });

const store = createStore(
    rootReducer,
    {},
    compose(
      applyMiddleware(thunk)
    ),
  );

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
    );

